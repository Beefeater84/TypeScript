// Как превратить массив с список типов

// as const - превращает массив строк в массив только для чтения
// typeof при этом вернет список
const sandwiches = ['ham', 'blt', 'veg', 69] as const;


// Не могу больше ничего туда добавить
// sandwiches.push('fish');

//sandwiches[number] - в душе пока не знаю, что это значит. Но возвращает это список значений в качестве типа
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