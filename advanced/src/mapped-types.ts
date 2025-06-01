// Mapped Types позволяют создавать новые типы на основе существующих, изменяя их свойства.
type State = {
  name: string;
  age: number;
};

type MappedState = {
  // Они строятся по шаблону
  // [loop]: output
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadOnlyState = ReadOnly<State>;

// ----
// Более сложный пример когда мы создаем геттеры и сеттеры с помощью as, &, и template literals
/*
    State - объект
    K - ключ, например name - возвращаем getName / setName
*/
type Getter<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

type Setter<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void;
};

type PersonType = {
  name: string;
  age: number;
};

type Store<State> = Getter<State> & Setter<State>;

type PersonStore = Store<PersonType>;

declare const personStore: PersonStore;

personStore.setName("Jhon");
personStore.setAge(30);
console.log(personStore.getName()); // "Jhon"
console.log(personStore.getAge()); // 30

// TASKS
/* 
Конечно! Mapped Types — это очень мощная и часто используемая функция TypeScript. Вот опросник и практические задачи, чтобы проверить ваше понимание этой темы.

Вопросы для проверки понимания:

Что такое Mapped Types в TypeScript? Какова их основная цель?
Объясните синтаксис Mapped Types: [P in K]. Что означают P и K?
Как Mapped Types помогают решить проблему дублирования кода при создании производных типов?
Какие встроенные утилиты (Utility Types) TypeScript используют концепцию Mapped Types для своей реализации? Приведите примеры.
Как можно сделать все свойства типа необязательными (?) или только для чтения (readonly) с помощью Mapped Types?
Как вы можете удалить или добавить модификаторы ? (необязательность) или readonly к свойствам с помощью Mapped Types? Объясните синтаксис + и -.
Что такое Key Remapping через as в Mapped Types? Для чего это используется?
Объясните разницу между [P in keyof T] и [P in K] в Mapped Types, где K — это объединение строковых литералов.

*/

// Практические задачи: ------------------------------------------------------------------------------------

// Задача 1: Основы Mapped Types
// У вас есть следующий тип:
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

/* 

Создать кастомный Omit
Создать кастомный Pick
Создать кастомный ReturnType
Создайте тип NullableProduct, который делает все свойства Product допускающими значение null (т.е. string | null, number | null и т.д.).


Задача 2: Добавление и удаление модификаторов
Используя тип Product из Задачи 1:
Создайте тип RequiredProduct, который берет PartialProduct и делает все его свойства обязательными.
Создайте тип MutableProduct, который берет ReadonlyProduct и делает все его свойства изменяемыми (удаляет readonly).
*/
// Задача 3: Изменение имен свойств (Key Remapping)
// У вас есть следующий тип:

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

/* 
Создайте тип UserForm, используя Mapped Types с Key Remapping, чтобы переименовать свойства firstName в first_name и lastName в last_name, оставив email без изменений. (Подсказка: используйте условные типы T extends U ? X : Y внутри as).
*/
// Пример желаемого вывода:

type UserForm = {
  first_name: string;
  last_name: string;
  email: string;
};

// Создайте тип Getters, который для каждого свойства в User генерирует метод-геттер. Например, для свойства firstName должен быть getFirstName: () => string;.
// Пример желаемого вывода:

type Getters = {
  getFirstName: () => string;
  getLastName: () => string;
  getEmail: () => string;
};

// Задача 4: Фильтрация свойств
// У вас есть следующий тип:
type Config = {
  apiUrl: string;
  timeout: number;
  logLevel: "info" | "warn" | "error";
  debugMode: boolean;
};
// Создайте тип StringConfig, используя Mapped Types, который содержит только строковые свойства из Config.
// Создайте тип NumericConfig, который содержит только числовые свойства из Config.

// Задача 5: Продвинутое использование с infer и union
// У вас есть следующий тип:
type EventHandlers = {
  onLogin: (user: string) => void;
  onLogout: () => void;
  onPostCreated: (postId: number, content: string) => void;
};

// Создайте тип EventArguments, который для каждого обработчика событий извлекает тип его аргументов в виде кортежа.
// Пример желаемого вывода:
type EventArguments = {
  onLogin: [user: string];
  onLogout: [];
  onPostCreated: [postId: number, content: string];
};
