import React, {useState} from 'react'
// Способ №1, через useSate

export const ToDoForm: React.FC = () => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value.trim())
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            console.log(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt-2">
            <input
                type="text"
                name="title"
                id="title"
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Enter activities</label>
        </div>
    )
}