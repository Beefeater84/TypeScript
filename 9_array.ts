const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

// Tuples - массив из разных типов данных (кортежи)
// Union types - объединение типов данных

const arr3: (string | number)[] = [1, 'string']

// Тут может быть всего 2 элемента, причем 1 всегда номер, второй всегда строка
const tuples: [number, string] = [1, 'string']

const arr4: readonly number[] = [1, 2, 3]
// arr4.push(5) // Ошибка, потому что readonly

// Добавляем бесконечное количество чисел в массив
const arr5: [boolean, string, ...number[]] = [true, 'string', 42, 1, 2, 3, 4, 5]