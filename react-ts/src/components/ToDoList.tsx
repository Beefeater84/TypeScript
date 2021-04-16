import React from 'react'
import {ITodo} from "../interfaces";

// Пример свойств не с interface, a с type
type ToDoListProps = {
    todos: ITodo[],
    // 2 способа описания функции - стрелочная и метод
    // onRemove(id: number): void
    // onToggle: (id: number) => void
    // onToggle?: (id: number) => void - необязательный параметр
    onRemove(id: number): void
    onToggle(id: number): void
}

export const ToDoList: React.FC<ToDoListProps> = ({todos, onRemove, onToggle}) => {

    if (todos.length === 0){
        return <p className="center">Empty list</p>
    }

    const removeElement = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes: string[] = ["todo"]
                if (todo.completed === true) {
                    classes.push("completed")
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox"
                                   checked={todo.completed}
                                   onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i
                               className="material-icons red-text"
                               onClick={event => removeElement(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}