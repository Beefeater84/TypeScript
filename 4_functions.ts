// Базовое объявление функций
// function fun( ?param, ?param2 ) - необязательный параметр
// fun( _, _1 ) - _ означает, что мне вообще все равно что тут, мне важно добраться до следующего аргумента


// Эта переменная может принять в себя любую функцию
let fn: Function

// Эта переменная может принять 2 параметра, которые будут числами, и вернуть число
function sum(a: number, b: number): number {
    return a + b
}
let fun: (a: number, b: number) => number = sum

fun(1, 2)



function add(a: number, b: number): number {
    return a + b
}

function upperCase(str: string): string {
    return str.trim().toUpperCase()
}

/*
*   Ситуация, когда в функцию может заходить несколько параметров и она будет возвращать разный результат
*   Мы описываем каждый результат отдельно
*   А потом в функции с помощью if каждый из возможных результатов выводим
*
* */

// Интерфейсы, которые возвращает функция

interface MyPosition {
    x: number | undefined // тут undefined - это возможный тип данных
    y: number | undefined
}

interface MyPositionDefault extends MyPosition{
    default: string
}

// Определяем что в функцию может заходить от 0 до 2 параметров, и что она возвращает в этом случае
function position(): MyPosition
function position(a: number): MyPosition
function position(a: number, b: number): MyPosition

// Теперь описываем саму функцию, причем описываем каждый из возможных вариантов

function position(a?: number, b?: number){
    if (!a && !b) {
        // если нет ни а ни b, то возвращаем
        // тут undefined - это значение переменной
        return {x: undefined, y: undefined}
    }

    if (a && !b){
        // если а есть, b нет
        return {x: a, y: undefined, default: a.toString()}
    }

    // Есть все параметры
    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(10))
console.log('Two param: ', position(10, 10))


// Какой объект возвращает функция, чтобы подхватились типы данных
// Предположим, что у нас есть бренд машины, а есть еще и марка:
// BMW - 3 series, 5 series, 7 series
// Audi - A4, A6, A8 и т.д.
// И хотим обрабатывать если BMW 3 series, то возвращать BMW 3 series, если BMW 5 series, то возвращать BMW 5 series и т.д.
// Создаем отдельную функцию для этого
// Потому эту функцию можем использовать в switch case и все поля будут подсвечены

// function isBMW3Series(car: Car): car is BMW3Series {
//     return car.model === '3 series'
// }

