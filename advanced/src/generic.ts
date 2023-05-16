// Две равнозначные записи
// const car: string[] = ['Ford', 'Honda']
// const car2: Array<string> = ['Ford', 'Honda']

// Нам надо дать понять, что возвращает промис (строку, число и тд)
// 2 равнозначные записи:
// const promise: Promise<string> = new Promise()
// const promise = new Promise<string>()

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Result')
    }, 2000)
})

promise.then(data => {
    // console.log(data.trim())
})

// =======================================

// Нужно указать, что в функцию может прийти массив любого типа
// но тип any не подходит, потому что он не дает никакой информации
// Поэтому мы используем generic параметр T - может быть любая буква, но принято использовать T
// Мы говорим - создай тип T, array: T[] - прими аргумент этого типа, и верни массив этого типа
// То есть если придет массив строк, то и вернуться массив строк

const concatArray = <T>(array: T[]): T[] => {
    return array.concat(array)
}

const numArr  = concatArray([1, 2, 3])
const strArr = concatArray(['1', '2', '3'])

// =======================================

// Предположим ситуация, когда нам нужно ограничить получаемые данные

const log = <T extends string | number>(value: T): T => {
    console.log(value)
    return value
}

// Если оставить как есть, то он приведет к строгому типу
// let res1 = log('Hello') - будет иметь тип "Hello", а не string
// Есть 2 способа решить эту проблему:

let res1 = <string>log('Hello')
let res2 = log(42) as number

// Нам нужно указать, что a и b - это объекты и что финальный объект будет иметь такие свойства
// Если указать им явно a: object , то в объекте me мы не будем иметь к ним доступа. me.age выдаст ошибку
// Буквы T и R мы придумываем сами

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const me = mergeObjects({name: 'Tony'}, {age: 36})
console.log(me.name)

// Не будет работать благодаря записи "T extends object"
const NoObjButString = mergeObjects('abra', {age: 36})


// =======================================
// Оператор keyof
// Позволяет получить список ключей объекта
// R extends keyof T - говорим, что R является списком ключей объекта T

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

const getValue = <T extends object, R extends keyof T>(obj: T, key: R): T[R] => {
    return obj[key]
}

const res3 = getValue(obj, 'a')
const res4 = getValue(obj, 'wrong key')

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Tony',
    age: 36
}

getObjectValue(person, 'name')
getObjectValue(person, 'age')
// getObjectValue(person, 'job') - не работает, потому что его нет в person


//=========================================================
// Пошли хаки.
// Наша задача - value должно быть любым типом, у которого есть свойство length (строки, массивы)
// Мы создаем дополнительный интерфейс, и там явно провисываем, что value может быть объектом со свойством length, которое должно быть числом
// А мы знаем, что строкам и массивам оно в браузере создается автоматически

interface ILength {
    length: number
}

function showCount<T extends ILength>(value: T) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

showCount('Я строка')
showCount(['Я', 'массив'])
// showCount(11) - не будет работать, потому что у number нет length
showCount({length: 20}) // будет работать и выдаст 20. Но это по сути баг, потому что функция на вход ждет объект

// =====================================
// Работа с классами
// Через T мы явно даем понять, что вся коллекция работает с одним типом, который в нее пришел
// T extends number | string | boolean - у нас метод remove работает только с примитивными типами. Поэтому мы избавляем себя от ошибки и не позволяем передать сюда объект

class Collection<T extends number | string | boolean> {

    constructor(protected _items: T[] = []){ }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(['I', 'am', 'Array'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

class List extends Collection<string> {
    // Теперь у нас есть метод add, который принимает только строки
    // Мы можем переопределить метод add и сделать его более строгим
    add(item: string) {
        this._items.push(item.toUpperCase())
    }
}


//=====================
// Partial

interface Car {
    model: string,
    year: number
}

function creatAndValidateCar(model: string, year: number): Car {

    // TS ругается на созданный пустой объект, потому что у него не хватает полей model и year, которые есть в интерфейсе
    const car: Partial<Car> = {}

    if(model.length >  3){
        car.model = model
    }

    if(year > 2000){
        car.year = year
    }

    // Также сохраняем его как машина
    return car as Car
}

//====================================
//// Readonly

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2001
}

// Не позволяем менять объект, но позволяем читать его свойства
// ford.model = 'Ferrari'