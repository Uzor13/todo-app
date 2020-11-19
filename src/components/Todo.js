import React from 'react';

function Todo({todos, todo, setTodos, text}) {
    //EVENTS
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"/>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
        </div>
    );
}

export default Todo;