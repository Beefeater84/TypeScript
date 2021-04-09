// Используются в Angular
// По сути являются оберткой. На практике: У нас есть класс, который что-то делает. И с помощью декоратора при создании класса мы автоматически добавляем необходимый html

// // Декоратор для класса
// function Log(constructor: Function){
//     console.log(constructor)
// }
//
// // Декторатор для свойств
// function Log2(target: any, propName: string | Symbol){
// target.constructor.name - доступ к классу, где находится свойство
//     console.log(target)
//     console.log(propName)
// }
//
// // Декоратор для метода
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor){
//     console.log(target)
//     console.log(propName)
//     console.log(descriptor)
// }
//
// @Log
// class testComponent{
//     @Log2
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//
//     @Log3
//     logName(): void{
//         console.log(`Component Name: ${this.name}`)
//     }
// }


//================================================
// Задача Component - при создании класса, автоматически добавлять html template в наш html
// Задача Bind - при при клике на кнопку вызывать метод класса logInfo(), но если мы его вызываем от кнопки, то контекст this слетает и нам нужно его забандить
//


interface ComponentDecorator {
    selector: string,
    template: string
}

function Component(config: ComponentDecorator) {
    return function
        // <T extends { new(...args: any[]): object}> Эта запись создает T и говорит что в нем объект со всеми перечисленными агрументами, включая Constructor
        // const card = new CardComponent('I am new component'). в этой generic записи мы описываем ключевое слово NEW, поэтому оно тут нужно
        <T extends { new(...args: any[]): object }>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                // В душе не понимаю все что написано сверху и никак не могу это модифицировать. Насколько я понял - на выходе декоратора мы получаем простой объект и все это сверху просто перехватывает свойсва для него.
                // Тут же начинается то что я могу модицифировать
                const el = document.querySelector(config.selector);
                if (!!el) {
                    el.innerHTML = config.template
                }
            }
        }
    }
}

// Запись _: any, _2: any - говорит TS, что нам не важны эти переменные, нам надо просто добраться до следующей
// Поскольку мы работаем с PropertyDescriptor, то и вернуть в конце должны его
function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
    // console.log(descriptor)

    //В параметре value лежит оригинальная функция, ее нам и надо модифицировать
    const original = descriptor.value

    return {
        configurable: true,
        enumerable: false,

        // Возвращаем ее в виде getter, и важно не в виде стрелочной функции, а то контекст опять слетит
        get() {
            return original.bind(this)
        }
    }
}

@Component({
    selector: '#card',
    template: `
      <div class="card">
        <div class="card-content">
          <span class="card-title"> Card Component </span>
        </div>
      </div>
    `
})
class CardComponent {
    constructor(public name: string) {
        this.name = name
    }

    @Bind
    logInfo(): void {
        console.log(`This component name ${this.name}`)
    }
}

const card = new CardComponent('I am new component')

const btn = document.querySelector('.btn')
if (!!btn) {
    // Чтобы сохранить контекст this можно просто написать btn.addEventListener('click', card.logInfo.bind(card) ), но мы же не ищем легких путей

    btn.addEventListener('click', card.logInfo)
}

// /=================================================
// Валидация
// Нужно написать декоратор, который будет проверять - добавлен ли e-mail в наш класс или нет

type ValidatorType = 'required' | 'email' | 'minLength' | 'maxLength' // тут можно расширить и добавлять

interface ValidatorConfig {
    // [prop: string] - здесь будет храниться название класса, к которому мы добавляем данные валидаторы. В нашем случае Form
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

// // Это просто пример структуры ValidatorConfig, что куда заносится
// const validatorExit: ValidatorConfig = {
//     'Form': {
//         'email': "email",
//         'login': 'required',
//         'password': 'required'
//     }
// }

const validators: ValidatorConfig = {
    // По умолчанию оставим пустым
    // Декоратор вызывается в момент создания класса, поэтому мы используем этот объект, чтобы понять - корректные поля или нет
}

function Required(target: any, propName: string) {
    // для данной задачи validators - это как база данных, просто глобальный объект, где мы храним значения формы, которые будут приходить на валидацию.

    // Создаем первую строчку нашего interface, тут должно вернуться 'Form': {}
    validators[target.constructor.name] = {
        //если в этом классе были бы другие поля, а не только e-mail, то их нужно разверунть, чтобы не затерлись
        ...validators[target.constructor.name],
        // [propName] - ES6 обозначение ключа как переменной
        // поскольку у нас декоратор проверяет только на значение required, то мы и добавляем его по тупому. Т.е. мы проверяем, что e-mail должен быть в форме, иначе она не валидна
        [propName]: 'required'
    }
}

function validate(obj: any): boolean {
    // В объекте validators может храниться много форм, поэтому нам нужно забрать именно нашу, ту, которую образовал class Form
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) {
        // Если мы не добавляли никаких методов проверки этой формы, то сразу возвращаем true - валидация пройдена
        return true
    }
    let isValid = true;
    Object.keys(objConfig).forEach(key => {

        // Пробегаемся по всем свойствам.
        if (objConfig[key] === 'required') {
            // если поле имеет валидатор 'required', то проверяем есть ли оно
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

class Form {
    // email? - означает, что параметр не обязательный, поэтому пишем email: string | void - он может быть пустум
    @Required
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form('ya@mail.ru')
const form2 = new Form()

if (validate(form)) {
    console.log('Valid: ', form)
} else {
    console.log('Validation Error')
}

if (validate(form2)) {
    console.log('Valid: ', form2)
} else {
    console.log('Validation Error')
}

