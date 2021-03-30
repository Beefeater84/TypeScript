/* Basic types */

const isfeatching: boolean = false
const isLoading: boolean = true

const num: number = 42
const float: number = 4.2
const unlimited: number = 3e10
//3e10 = 3 в 10 степени

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

function ThrowError(message: string): never {
    throw new Error(message)
}

function loop(): never {
    while (true) {
        console.log('Я не завершусь')
    }
}





