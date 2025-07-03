// Как превратить массив с список типов

// as const - превращает массив строк в массив только для чтения
// typeof при этом вернет список
const sandwiches = ['ham', 'blt', 'veg', 69] as const;


// sandwiches.push('fish');

//sandwiches[number] - [number] - понимает тип массива и возвращает этот тип. В данном случае это будет 'ham' | 'blt' | 'veg' | 69
type Sandwich = typeof sandwiches[number];

const mySandwich: Sandwich = 'ham'

// ==============================================

// Как превратить объект в список типов

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BNG: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar'
}

// typeof возвращает object {USD: 'string', AUD: 'string'}
// keyof проходтся по ключам и делает их типами
type CurrencyCode = keyof typeof currencies;

let selectCurrency: CurrencyCode = "USD"

// Динамически определяем типы для вложенный объектов.

//======================
// В CurrencyCode у нас лежит список "AUD" | "USD" | "CAD" | "BNG" | "BRL"
// Перечисляем их Property in, говорим, что параметры не обязательны '?' и они являются числом
type Rate = {
    [Property in CurrencyCode]?: Number
}

// Каждый из верхнего уровня является объектом и хранит в себе другие валюты. ПРичем может хранить не все
type Rates = {
    [Property in CurrencyCode]?: Rate
}

const ratesByBase: Rates = {
    USD: {
        BNG: 0.86,
        AUD: 0.23,
        BRL: 1.2,
        CAD: 1.4
    },
    CAD: {
        BNG: 2.41,
        AUD: 1.14
    }
}

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
// satisfies - один из методов, которым мы присваиваем типы значению
// Он позволяет проверить, что значение соответствует определенному типу

type AvailiblaColors = "red" | "purple" | "marinade";
type Color2 = AvailiblaColors | [number, number, number];
type Pallet = Record<string, Color2>;

const pallet = {
  red: "red",
  black: [0, 0, 0],
  perple: "mistake color", // Expected error
} satisfies Pallet;

const Black: [number, number, number] = [...pallet.black];

// Satisfies работает с as const и хорошо вытаскивает значение из типов ( infer значений )
// Мы точно будет знать, что pallet2.black[2] = 255

const pallet2 = {
  black: [0, 255, 0],
} as const satisfies Pallet;

console.log(pallet2.black); // [0, 255, 0]


// Вот опросник и практические задачи по оператору satisfies:


// - Что такое оператор satisfies в TypeScript? Какова его основная цель?
// - В чем ключевое отличие satisfies от обычного присваивания (например, const myValue: MyType = ...)?
// - Приведите пример сценария, где использование satisfies будет предпочтительнее явной аннотации типа при присваивании.
// - Как satisfies помогает сохранить узкий (narrowed) тип литералов или других сложных типов, 
// в то время как обычное присваивание может привести к их расширению (widening)?
// - Объясните, почему satisfies часто называют способом "подтвердить, но не навязывать" тип.
// - Какие проблемы могут возникнуть, если не использовать satisfies в сценариях, 
// где вы хотите одновременно проверить соответствие типу и сохранить детализацию выведенного типа?

// Практические задачи:
// Задача 1: Основы satisfies vs. Явное присваивание

// Каков выведенный тип colorConfig1? Можете ли вы использовать его для сравнения с 'red' или другими конкретными литералами?
// Каков выведенный тип colorConfig2? В чем разница с colorConfig1?
type ColorOptions = "red" | "green" | "blue";
const colorConfig1: ColorOptions = "red";
const colorConfig2 = "green" satisfies ColorOptions;

// Задача 2: Сохранение детализации типа объекта
type ButtonConfig = {
  text: string;
  variant: "primary" | "secondary" | "danger";
  onClick?: () => void;
  icon?: string;
};


// Какой тип у myButton1.variant? myButton1.icon?
// Представьте, что вы хотите написать функцию, которая принимает ButtonConfig и обрабатывает ее. 
// Как satisfies может помочь, если вы хотите иметь доступ к конкретному значению variant (например, 'primary') 
// или конкретному значению icon ('star') без дальнейшего сужения типа внутри функции?
const myButton1: ButtonConfig = {
  text: "Click Me",
  variant: "primary",
  icon: "star",
};

const myButton2 = {
  text: "Submit",
  variant: "secondary",
  icon: "send", 
} satisfies ButtonConfig;


`
https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html
https://youtu.be/Ho6XJsZPx70?si=mL_m1RbF8krV4HIA


`;
