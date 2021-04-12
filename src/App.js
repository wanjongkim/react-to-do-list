import React, { useEffect, useState } from "react";
import './App.css';
import Form from './components/Form'
import TodoList from './components/ToDoList'

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilters] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    filterHandler();
  }, [todos, filter]);

  const filterHandler = () => {
    switch(filter) {
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
  };

  return (
    <div className="App">
      <header>
        <h1>Wan's To Do List</h1>
      </header>
      <Form setFilters={setFilters} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
