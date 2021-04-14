import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoFormRef} from "./components/ToDoFormRef";
// import {ToDoForm} from "./components/ToDoForm";


const App: React.FC = () => {

    const [todos, setTodos] = useState<[]>([])

    const todoHandler = (todos: string): void => {
        console.log('Added new todo: ', todos)
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
