import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

   const completeHandler = () => {
       setTodos(todos.map(item => {
           if(item.id === todo.id) {
               return {
                   ...item, completed: !item.completed
               }
           }
           return item;
       }))
   }

    

    return(
        <div className = "todo">
            <li className={`todo-item ${todo.completed ?  "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-chek">✔</i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash">Del</i>
            </button>
        </div>

    );
};

export default Todo;