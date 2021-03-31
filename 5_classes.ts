class Car {
    // Определяем какие будут поля
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
console.log(Subaru.showModel(10))


// Более котортакая запись, когда мы поля определяем прямо в конструкторе
class Car2 {
    // TypeScript сам создат поле model
    constructor(readonly model: string) { }
}