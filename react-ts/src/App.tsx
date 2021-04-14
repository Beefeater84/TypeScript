import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoFormRef} from "./components/ToDoFormRef";
// import {ToDoForm} from "./components/ToDoForm";
import {ITodo} from "./interfaces"


const App: React.FC = () => {

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
        console.log(todos)
    }

    // В React Ts нужно указывать какие именно Props мы ждем, поэтому в ToDoFormRef указываем addToDo, иначе этот проект не соберется

    return (
        <>
            <Navbar/>
            <div className="container">
                <ToDoFormRef addTodo={todoHandler}/>
            </div>

        </>

    );
}

export default App;
