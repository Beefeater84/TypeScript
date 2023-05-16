"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    // Какие параметры принимаем
    function Car(theModel) {
        // Определяем список полей в перечисленном классе
        this.numberOfWheels = 4;
        // В конструкторе мы можем перезаписать readonly поле, но только здесь. В методах не можем
        this.model = theModel;
    }
    // Определяем методы
    Car.prototype.showModel = function (id) {
        return "Id \u2116".concat(id, " is ").concat(this.model, " and has ").concat(this.numberOfWheels, " wheels");
    };
    return Car;
}());
var Subaru = new Car('Subaru');
// console.log(Subaru.showModel(10))
// Более котортакая запись, когда мы поля определяем прямо в конструкторе
var Car2 = /** @class */ (function () {
    // TypeScript сам создат поле model
    function Car2(model) {
        this.model = model;
    }
    return Car2;
}());
// ========================================================================
var User = /** @class */ (function () {
    function User(name, birthDate, hobbies) {
        if (hobbies === void 0) { hobbies = []; }
        var _this = this;
        this.hobbies = [];
        this.getHobbies = function () {
            console.log(_this.hobbies);
        };
        this.name = name;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    User.prototype.setHobbies = function (hobby) {
        this.hobbies.push(hobby);
        // Это нужно, чтобы можно было вызывать методы цепочкой
        return this;
    };
    return User;
}());
var user = new User('John', new Date('1990-01-01'));
user.setHobbies('Football').setHobbies('Basketball').getHobbies();
// ========================================================================
// Getter Setter
var Pet = /** @class */ (function () {
    function Pet(name, breed) {
        this._name = name;
        this.breed = breed;
    }
    Object.defineProperty(Pet.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Pet;
}());
var pet = new Pet('Molly', 'Labrador');
console.log(pet.getName); // Molly
pet.setName = 'Molly Junior';
console.log(pet.getName); // Molly Junior
// ========================================================================
// Наследование
var Furniture = /** @class */ (function () {
    function Furniture(color) {
        this.color = color;
    }
    Furniture.prototype.hasLegs = function () {
        return false;
    };
    return Furniture;
}());
var Chair = /** @class */ (function (_super) {
    __extends(Chair, _super);
    function Chair(color) {
        return _super.call(this, color) || this;
    }
    // Непонятно что за ошибка, он нормально скомпилировался
    // override - переписывает метод из родительского класса, и если вдруг кто-то в родительском классе поменяет этот метод или уберет его, то тут будет ошибка
    // Показывать ошибку или нет зависит от этого флага в tsconfig.json: "noImplicitOverride": true
    Chair.prototype.hasLegs = function () {
        console.log(_super.prototype.hasLegs.call(this)); // false
        return true;
    };
    return Chair;
}(Furniture));
var chair = new Chair('red');
console.log(chair.hasLegs()); // true
// ========================================================================
// Модификаторы (protected, public, private)
var Animal = /** @class */ (function () {
    function Animal() {
        // Видны в данном классе, и в тех, что его наследуют. Но в переменной будут не видны (пример ниже)
        this.voice = '';
        // по умолчанию все свойства public.
        // Видны везде
        this.color = 'black';
    }
    // Видны только там, где объявлены
    Animal.prototype.go = function () {
        console.log('go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // тут будут работать public и protected методы из Animal
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
/*
* const cat = new Cat()
* cat.voice = 'Mau' - не работает, потому что voice protected. Работать будут только public методы. Чтобы задать voice, польуется setter setVoice
* */
var cat = new Cat();
cat.setVoice('Mau');
//================================================
// Абстрактные классы
// От них можно наследоваться, но они ни во что не компилируются
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('rendered');
    };
    AppComponent.prototype.info = function () {
        return 'I am extended from Component';
    };
    return AppComponent;
}(Component));
