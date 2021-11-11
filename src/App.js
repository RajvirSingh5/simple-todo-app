import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';


function App() {
  //state related
  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form  
        inputText = {inputText}
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        setStatus={setStatus}
        
      />
      <TodoList 
        setTodos = {setTodos}
        todos = {todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
