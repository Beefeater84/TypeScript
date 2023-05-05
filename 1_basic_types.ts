/* Basic types */
// String / Number / Boolean / Any / Symbol / never


const isfeatching: boolean = false
const isLoading: boolean = true

const num: number = 42
const float: number = 4.2
const unlimited: number = 3e10
//3e10 = 3 в 10 степени
const nan: number = NaN
const inf: number = Infinity
const und: undefined  = undefined
const nolla: null = null

// Literal type, в этой строке допустим только текст 'Typescript'
const message: 'Typescript' = 'Typescript'

const str: string = 'I am a string'

const numberArray: number[] = [1, 2, 3, 4, 5]
const numberArray2: Array<number> = [1, 2, 3, 4, 5] // Generic запись

// Tuple - если массив состоит из разных типов
const user: [number, string] = [303032223, 'Anatoliy']

// Any - позволяет сменить тип переменной
let changeType: any = 123456
changeType = 'Это число'

// Functions
/*
* В параметре указываем тип
* : void - тмп функции, который сообщает что функция ничего не возвращает
* */
function sayMyName(name: string): void {
    console.log(name)
}

/*
* Never - функция, которая выбрасывает ошибку или никогда не завершится
* Работают очень странно - потому что если есть хоть какие-то условия, то отказывается компилировать
* */


// Можно применять в switch case, когда мы уверены, что все варианты будут обработаны


function doSomething(message: string): string{
    // Мы обработали все возможные варианты, поэтому можем вернуть never
    // И если кто-то когда-то добавит где-то код и появится еще один вариант, а тут забудет добавить его обработку, то компилятор выдаст ошибку

    let Never: never = ThrowError('Ошибка')

    switch (message) {
        case 'Typescript': return 'Typescript';
        case 'Javascript': return 'Javascript';
        default: return Never
    }
}


//  некоторые рекурсивные функции могут не завершиться, поэтому тоже можно поставить never
function rec(): never {
    return rec()
}


// и в default мы просто выбрасываем ошибку
function ThrowError(message: string): never {
    throw new Error(message)
}

function loop(): never {
    while (true) {
        console.log('Я не завершусь')
    }
}

/* Type -
    Позволяет создавать свой тип данных.
    Это полезно, когда мы хотим дать понять за что именно отвечает переменная
    Также она позволяет применять несколько типов данных к переменной

    Type очень интересная фигря оказалась
    Смотреть 6_guards и 8_operators
 */

type Login = string | number;
const login: Login = '12345'
const login2: Login = 12345


const s: symbol = Symbol('Description of symbol')
const s2: symbol = Symbol('Description of symbol')

const obj = {
    name: 'Anatoliy',
    [s]: 'meta'
}


export {}







