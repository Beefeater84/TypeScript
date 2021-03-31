// Базовое объявление функций

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
function position(a: number): MyPositionDefault
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