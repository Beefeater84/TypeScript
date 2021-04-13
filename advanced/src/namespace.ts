// Namespace нужны, когда у нас на один class создано куча разных типов, интерфейсов и в них можно запутаться.
// Поэтому мы создаем отдельный namespace, куда помещаем все эти типы, а наш класс оборачиваем в namespace и прописываем ссылку до него

// Вот так ставятся ссылки на другие файлы, фактически это импорт
/// <reference path="form-namespace.ts" />
namespace Forms{
    class myForm {
        private state: FormState = 'active'
        private type: FormType = 'block'

        constructor(public email: string) {
            this.email = email
        }

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    // Используем его внутри этого Namespace
    export const form4 = new myForm('e-mail')

}

console.log(Forms.form4.getInfo())
