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
    showModel(id: number){
        return `Id №${id} is ${this.model} and has ${this.numberOfWheels} wheels`
    }
}

const Subaru = new Car('Subaru')
// console.log(Subaru.showModel(10))


// Более котортакая запись, когда мы поля определяем прямо в конструкторе
class Car2 {
    // TypeScript сам создат поле model
    constructor(readonly model: string) { }
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
        return this.name;
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
// Модификаторы (protected, public, private)

class Animal {
    // Видны в данном классе, и в тех, что его наследуют. Но в переменной будут не видны (пример ниже)
    protected voice: string = ''
    // по умолчанию все свойства public.
    // Видны везде
    public color: string = 'black'
    // Видны только там, где объявлены
    private go(){
        console.log('go')
    }
}

class Cat extends Animal{
    // тут будут работать public и protected методы из Animal

    public setVoice(voice: string): void {
        this.voice = voice
    }
}

/*
* const cat = new Cat()
* cat.voice = 'Mau' - не работает, потому что voice protected. Работать будут только public методы. Чтобы задать voice, польуется setter setVoice
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

export {}
