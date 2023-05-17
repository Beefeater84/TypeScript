class Car {
    // Определяем список полей в перечисленном классе
    readonly numberOfWheels: number = 4
    readonly model: string

    // Какие параметры принимаем
    constructor(theModel: string) {
        // В конструкторе мы можем перезаписать readonly поле, но только здесь. В методах не можем
        this.model = theModel
    }

    // Определяем методы
    showModel(id: number) {
        return `Id №${id} is ${this.model} and has ${this.numberOfWheels} wheels`
    }
}

const Subaru = new Car('Subaru')
// console.log(Subaru.showModel(10))


// Более котортакая запись, когда мы поля определяем прямо в конструкторе
class Car2 {
    // TypeScript сам создат поле model
    constructor(readonly model: string) {
    }
}

// ========================================================================

class User {
    name: string;
    birthDate?: Date;
    hobbies: string[] = [];

    constructor(name: string, birthDate: Date, hobbies: string[] = []) {
        this.name = name;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }

    getHobbies = () => {
        console.log(this.hobbies)
    }


    setHobbies(hobby: string): this {
        this.hobbies.push(hobby)
        // Это нужно, чтобы можно было вызывать методы цепочкой
        return this
    }
}

const user = new User('John', new Date('1990-01-01'));

user.setHobbies('Football').setHobbies('Basketball').getHobbies()

// ========================================================================

// Getter Setter

class Pet {
    breed: string;
    _name: string;

    constructor(name: string, breed: string) {
        this._name = name;
        this.breed = breed;
    }

    get getName(): string {
        return this._name;
    }

    set setName(name: string) {
        this._name = name;
    }
}

const pet = new Pet('Molly', 'Labrador');

console.log(pet.getName); // Molly
pet.setName = 'Molly Junior';
console.log(pet.getName); // Molly Junior

// ========================================================================
// Наследование

class Furniture {
    color: string

    constructor(color: string) {
        this.color = color
    }

    hasLegs(): boolean {
        return false
    }
}

class Chair extends Furniture {
    constructor(color: string) {
        super(color);
    }

    // Непонятно что за ошибка, он нормально скомпилировался
    // override - переписывает метод из родительского класса, и если вдруг кто-то в родительском классе поменяет этот метод или уберет его, то тут будет ошибка
    // Показывать ошибку или нет зависит от этого флага в tsconfig.json: "noImplicitOverride": true
    override hasLegs(): boolean {
        console.log(super.hasLegs()) // false
        return true

    }
}

const chair = new Chair('red')
console.log(chair.hasLegs()) // true

// ========================================================================
// Модификаторы (protected, public, private) и readonly, static

// static - его можно видеть снаружи класса, но он не будет доступен в экземплярах класса
// Обычно с помощью него задают какую-то константу (TYPE, VERSION и т.д.) и используют вместе с readonly
// static может быть еще и метод, но тогда он не будет доступен в экземплярах класса

class Book {
    title: string;

    constructor(title: string) {
        this.title = title
    }

    static gerTitle() {
        // return this.title - не работает, потому что this в статическом методе указывает на сам класс, а не на экземпляр класса
    }
}


class Animal {
    // Видны в данном классе, и в тех, что его наследуют. Но в переменной будут не видны (пример ниже)
    protected voice: string = ''
    // по умолчанию все свойства public.
    // Видны везде
    public color: string = 'black'
    // Видны только там, где объявлены

    // JS нативный private не поддерживает, но TS поддерживает
    #weight: number = 300

    private go() {
        console.log('go')
    }

    // Предположим нам надо сделать id, который бы могли видеть во всех наследуемых классах, но не могли его поменять,
    // А также чтобы он был недоступен вне класса

    private id: number = 1

    protected gotId(): number {
        return this.id
    }

}

class Cat extends Animal {
    // тут будут работать public и protected методы из Animal

    public setVoice(voice: string): void {
        this.voice = voice
    }
}

/*
* const cat = new Cat()
* cat.voice = 'Mau' - не работает, потому что voice protected. Работать будут только public методы. Чтобы задать voice, пользуемся setter setVoice
* */
const cat = new Cat()
cat.setVoice('Mau')


//================================================
// Абстрактные классы
// От них можно наследоваться, но они ни во что не компилируются

abstract class Component {
    abstract render(): void

    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('rendered')
    }

    info(): string {
        return 'I am extended from Component';
    }
}

// ========================================================================
// Краткая запись конструктора
// Вместо того, чтобы объявлять все переменные, в классе, потом в конструкторе их присваивать, можно сделать так:
// Только обязательно писать что они public, private, protected, readonly и т.д.
class Computer {
    // model: string = '';
    // memory: string = '';

    constructor(public model: string, public memory: string) {
        // this.model = model;
        // this.memory = memory;

    }
}

const Lenovo = new Computer('Lenovo', '16GB')


// ========================================================================
// Implements - позволяет реализовать интерфейс в классе

interface Lifecycle {
    onDestroy(): void

    onMount(): void
}

interface ComponentI {
    isChanged: boolean

    onChange(): void
}

class Component2 implements Lifecycle, ComponentI {
    isChanged: boolean = false

    onChange(): void {
        this.isChanged = true
    }

    onDestroy(): void {
        console.log('destroyed')
    }

    onMount(): void {
        console.log('mounted')
    }

}

// ========================================================================

// Мы можем получить набор параметров, которые принимает конструктор класса, и передать их в другой класс
// Это называется конструктором проброса

class User3 {
    constructor(public name: string, public age: number, private _id: number) {
    }

}

// При этом, если параметр не обязательный, то нужно обернуть его в Required
type User3Parameters = ConstructorParameters<typeof User3>
type User3FirstParameter = ConstructorParameters<typeof User3>[0]

export {}
