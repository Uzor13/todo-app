import React, {useState, useEffect} from "react";
import './App.css';

//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Run once
    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, filter])

    const filterHandler = () => {
        switch (filter) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };
    //Save to Local
    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
          let todoFromLocal = JSON.parse(localStorage.getItem('todos'),)
          setTodos(todoFromLocal);
        }
    }
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form todos={todos}
                  setTodos={setTodos}
                  setInputText={setInputText}
                  inputText={inputText}
                  setFilter={setFilter}
            />
            <TodoList
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos}/>
        </div>
    );
}

export default App;
