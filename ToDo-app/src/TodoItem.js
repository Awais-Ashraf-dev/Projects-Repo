import React from 'react';
import './TodoApp.css';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span className="todo-text">{text}</span>
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
