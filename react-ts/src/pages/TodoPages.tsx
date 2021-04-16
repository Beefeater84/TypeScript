import React, {useState, useEffect} from "react";
import {ToDoFormRef} from "../components/ToDoFormRef";
import {ToDoList} from "../components/ToDoList";
// import {ToDoForm} from "../components/ToDoForm";
import {ITodo} from "../interfaces"


declare var confirm: (question: string) => boolean

export const TodoPages: React.FC = () => {


    const [todos, setTodos] = useState<ITodo[]>([])

    const todoHandler = (title: string): void => {
        const newToDo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }

        // Можно обновлять state так, но он обновляется асинхронно, поэтому более правильная запись обновлять, основываясь на предыдущем стейте
        // setTodos([newToDo, ...todos])

        setTodos(prew => [newToDo, ...prew])
    }

    const RemoveHandler = (id: number) => {
        // Глобальные методы вызываются 2 способами:
        // - или через объект window
        // const shouldRemove = window.confirm('Remove this element?')
        // - или через declare с объявлением типа
        // declare var confirm: (question: string) => boolean
        const shouldRemove = confirm('Remove this element?')
        if (shouldRemove) {
            setTodos(prevState => prevState.filter(todo => todo.id !== id))
        }

    }

    // const ToggleHandler = (id: number) => {
    //     const newTodos = todos.map(todo => {
    //         if (todo.id === id)
    //             todo.completed = !todo.completed
    //         return todo
    //     })
    //     setTodos(newTodos)
    // }

    const ToggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    // Не забываем каждый раз возвращать новый объект
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            }))
    }

// Выполяется один раз, когда загружается
    useEffect(() => {
        // JSON.parse(localStorage.getItem('todos') || '[]') - если вдруг localStorage.getItem('todos') вернет null, то распарсь пустой массив
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

// Будет выполняться при обновлении массива todos (удалении и т.д.)
    useEffect(() => {
        // в localStorage складываем все, приведенное к строке
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

// В React Ts нужно указывать какие именно Props мы ждем, поэтому в ToDoFormRef указываем addToDo, иначе этот проект не соберется


    return (
        <>
            <ToDoFormRef addTodo={todoHandler}/>
            <ToDoList todos={todos} onToggle={ToggleHandler} onRemove={RemoveHandler}/>
        </>
    )
}