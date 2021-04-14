import React, {useRef} from 'react'
// Способ №2, через useRef
// Вариант просто для демонстрации возможностей TS. Потому что использование ссылок энергозатратно для React

interface TodoFormProps{
    addTodo(title: string): void
}

export const ToDoFormRef: React.FC<TodoFormProps> = props => {

    const link = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            // link.current! - говорит TS, игнорировать эту ошибку, мы уверены, что null тут не придет
            props.addTodo(link.current!.value)
            link.current!.value = ''
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                ref={link}
                type="text"
                name="title"
                id="title"
                onKeyPress={keyPressHandler}

            />
            <label htmlFor="title" className="active">Enter activities</label>
        </div>
    )
}