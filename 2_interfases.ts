/*
 Интерфейсы
 readonly - только для чтения
 color? - необязательный параметр

*/

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1',
    size: {
        width: 10,
        height: 10
    }
}

/* Добавление необязательный параметров после */
rect1.color = 'red'

// Другой способ объявления интерфейса
const rect2 = {} as Rect
const rect3 = <Rect>{} // Дженерик запись, устаревшая


// ===================================================================
// Наследование

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '4',
    size: {
        width: 10,
        height: 10
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===============================================================
// Ситуация, когда мы не можем указать все свойства

interface Css {
    [key: string]: string | number

    // key: string - это свойства 'marginTop', 'borderRadius'
    // []: string | number - это характеристики '10px' и тп
}

const Styles: Css = {
    'borderRadius': '10px',
    'marginTop': '20px',
    'color': '#ccc'
}

// ===================================================================
// Implements - создаем class, наследуемый от interface

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// ===================================================================

interface User {
    name: string,
    age: number,
    hobbies?: string[]
}

interface Address {
    city: string,
    street: string,
}

interface UserWithAddress extends User, Address {
    date: Date
}

const person: UserWithAddress = {
    name: 'Vladilen',
    age: 26,
    city: 'Kiev',
    street: 'Lenina',
    date: new Date()
}

// Как организовать тип Hash Map

// У объекта ключами могут выступать id пользователей, а значениями - сами пользователи
// [id: string]: UserWithAddress - динамический ключ

interface UserMap {
    [id: string]: UserWithAddress
}

const userMap: UserMap = {
    1: person,
    2: person,
    3: person
}

// Другой синтаксис, называется приведение типов
const user2Map = {
    1: person,
    2: person,
    3: person
} as UserMap

export {}


