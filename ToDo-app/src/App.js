import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import './TodoApp.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Function to add a new to-do item
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle the completion status of a to-do item
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to remove a to-do item
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to filter the to-do items based on completion status
  const filterTodos = (status) => {
    setFilter(status);
  };

  // Filter the to-do items based on the selected filter
  const filteredTodos = filter === 'all'
    ? todos
    : todos.filter((todo) => todo.completed === (filter === 'completed'));

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <FilterTodo filter={filter} filterTodos={filterTodos} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default App;
