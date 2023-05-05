/* Basic types */
// String / Number / Boolean / Any / Symbol
var isfeatching = false;
var isLoading = true;
var num = 42;
var float = 4.2;
var unlimited = 3e10;
//3e10 = 3 в 10 степени
var nan = NaN;
var inf = Infinity;
var str = 'I am a string';
var numberArray = [1, 2, 3, 4, 5];
var numberArray2 = [1, 2, 3, 4, 5]; // Generic запись
// Tuple - если массив состоит из разных типов
var user = [303032223, 'Anatoliy'];
// Any - позволяет сменить тип переменной
var changeType = 123456;
changeType = 'Это число';
// Functions
/*
* В параметре указываем тип
* : void - тмп функции, который сообщает что функция ничего не возвращает
* */
function sayMyName(name) {
    console.log(name);
}
/*
* Never - функция, которая выбрасывает ошибку или никогда не завершится
* Работают очень странно - потому что если есть хоть какие-то условия, то отказывается компилировать
* */
// Можно применять в switch case, когда мы уверены, что все варианты будут обработаны
// и в default мы просто выбрасываем ошибку
function ThrowError(message) {
    throw new Error(message);
}
function loop() {
    while (true) {
        console.log('Я не завершусь');
    }
}
var login = '12345';
var login2 = 12345;
// const s: symbol = Symbol('key')
