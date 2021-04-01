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
// Модификаторы

class Animal {
    // Видны в данном классе, а в тех, что его наследуют. Но в переменной будут не видны (пример ниже)
    protected voice: string = ''
    // по умолчанию все свойства public.
    // Видны везде
    public color: string = 'black'
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
