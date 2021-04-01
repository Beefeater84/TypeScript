// Просто запись формата Array<number>
// Но она бывает полезна, когда мы не знаем какой именно тип данных придет.
// Например массив, он может быть и из классов и из объектов и из смешанных типов
// В этом случае использует generic параметр T


const arrayOfNumbers = [1, 1, 3, 4, 5, 6, 7]
const arrayOfInstances = [1, 'Tony', 2, {id: 2}]

// У функции обязательно <T>, иначе все поломается
function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfInstances)