interface User {
  name: string;
  age: number;
  phone?: number;
}

// keyof - это оператор, который позволяет получить все ключи из другого типа или интерфейса
// keyof typeof - это оператор, который позволяет получить все ключи из другого ОБЪКТА
type UserKeys = keyof User; // 'name' | 'age'

// Таким образом можно создать тип, который будет содержать все ключи из объекта

const user: User = {
  name: "Vladilen",
  age: 26,
};

type User2 = keyof typeof user; // 'name' | 'age'

// ================================================

// Partial - это встроенный тип, который позволяет сделать все свойства в объекте необязательными
// Readonly - это встроенный тип, который позволяет сделать все свойства в объекте только для чтения
// Required - это встроенный тип, который позволяет сделать все свойства в объекте обязательными

function createUser(name: string, age: number): User {
  const user: Partial<User> = {};

  if (name.length !== 0) {
    user.name = name;
  }

  if (age > 0) {
    user.age = age;
  }

  return user as User;
}

const Elena: Readonly<User> = createUser("Elena", 20);
Elena.name = 123; // ошибка, потому что readonly

// Теперь все поля в объекте обязательны, включая phone
const Igor: Required<User> = {
  name: "Igor",
  age: 25,
  phone: 123456789,
};

// ================================================
// Omit - исключает из объекта какие-то свойства
// Pick - добавляет в новый тип только определенные свойства
// Extract - извлекает из одного типа те свойства, которые есть в другом типе
// Exclude - исключает из одного типа те свойства, которые есть в другом типе

interface User3 {
  name: string;
  age: number;
  hobbies: string[];
}

type UserData = Omit<User3, "hobbies">; // 'hobbies' - это ключ, который мы хотим исключить из User3
type UserData2 = Pick<User3, "name" | "age">; // 'name' | 'age' - это ключи, которые мы хотим взять из User3

type UserStringFields = Extract<"age" | "name" | "some", keyof User3>; // 'name' | 'age', потому что в User3 нет ключа 'some'
type UserStringFields2 = Exclude<"a" | "b" | User3, string>; // User3

// ================================================
// satisfies - это встроенный тип, который позволяет проверить, что один тип является подтипом другого

type AvailiblaColors = "red" | "purple" | "marinade";
type Color2 = AvailiblaColors | [number, number, number];
type Pallet = Record<string, Color2>;

const pallet = {
  red: "red",
  black: [0, 0, 0],
  perple: "mistake color", // Expected error
} satisfies Pallet;

const Black: [number, number, number] = [...pallet.black];

// Вот опросник и практические задачи по оператору satisfies:
// Практические задачи:
// Задача 1: Основы satisfies vs. Явное присваивание
type ColorOptions = "red" | "green" | "blue";
// Создайте объект colorConfig1 и явно укажите для него тип ColorOptions:
// Каков выведенный тип colorConfig1? Можете ли вы использовать его для сравнения с 'red' или другими конкретными литералами?
// Создайте объект colorConfig2 и используйте оператор satisfies ColorOptions:
// Каков выведенный тип colorConfig2? В чем разница с colorConfig1?
const colorConfig1: ColorOptions = "red";
const colorConfig2 = "green" satisfies ColorOptions;

// Задача 2: Сохранение детализации типа объекта
// У вас есть тип для конфигурации кнопки, где variant должен быть одним из предопределенных значений:
type ButtonConfig = {
  text: string;
  variant: "primary" | "secondary" | "danger";
  onClick?: () => void;
  icon?: string;
};

// Создайте объект myButton1 с явной аннотацией типа ButtonConfig:
//  Какой тип у myButton1.variant? myButton1.icon?

// Представьте, что вы хотите написать функцию, которая принимает ButtonConfig и обрабатывает ее. Как satisfies может помочь, если вы хотите иметь доступ к конкретному значению variant (например, 'primary') или конкретному значению icon ('star') без дальнейшего сужения типа внутри функции?

const myButton1: ButtonConfig = {
  text: "Click Me",
  variant: "primary",
  icon: "star", // Добавим свойство icon
};

const myButton2 = {
  text: "Submit",
  variant: "secondary",
  icon: "send", // Добавим свойство icon
} satisfies ButtonConfig;

// Задача 3: Расширение литеральных типов
type EventName = "click" | "hover" | "focus";
// Определите объект eventHandlers1, который сопоставляет каждое EventName с функцией. Используйте явную аннотацию типа для eventHandlers1:
const eventHandlers1: Record<EventName, () => void> = {
  click: () => console.log("Clicked"),
  hover: () => console.log("Hovered"),
  focus: () => console.log("Focused"),
};
// Попробуйте получить доступ к eventHandlers1.click. Какой тип у ключа 'click'?

// Определите объект eventHandlers2, который делает то же самое, но используйте satisfies оператор:
const eventHandlers2 = {
  click: () => console.log("Clicked"),
  hover: () => console.log("Hovered"),
  focus: () => console.log("Focused"),
} satisfies Record<EventName, () => void>;
// Попробуйте получить доступ к eventHandlers2.click. Какой тип у ключа 'click'?

// В чем преимущество eventHandlers2 по сравнению с eventHandlers1, если вы позже захотите, например, получить список всех ключей из eventHandlers2? (Подсказка: подумайте о keyof typeof eventHandlers1 vs keyof typeof eventHandlers2).

`
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html
https://youtu.be/Ho6XJsZPx70?si=mL_m1RbF8krV4HIA


Вопросы для проверки понимания:
Что такое оператор satisfies в TypeScript? Какова его основная цель?
В чем ключевое отличие satisfies от обычного присваивания (например, const myValue: MyType = ...)?
Приведите пример сценария, где использование satisfies будет предпочтительнее явной аннотации типа при присваивании.
Как satisfies помогает сохранить узкий (narrowed) тип литералов или других сложных типов, в то время как обычное присваивание может привести к их расширению (widening)?
Объясните, почему satisfies часто называют способом "подтвердить, но не навязывать" тип.
Какие проблемы могут возникнуть, если не использовать satisfies в сценариях, где вы хотите одновременно проверить соответствие типу и сохранить детализацию выведенного типа?
`;
