// Не забываем все экспортировать
// Файл для импорта в namespace.ts

namespace Forms {
    export type FormState = 'active' | 'disabled'
    export type FormType = 'inline' | 'block'

    export interface FormInfo {
        type: FormType,
        state: FormState
    }
}