import React from 'react';
import './TodoApp.css';

const FilterTodo = ({ filter, filterTodos }) => {
  const handleFilter = (status) => {
    filterTodos(status);
  };

  return (
    <div className="filter-todo">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => handleFilter('all')}
      >
        All
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => handleFilter('completed')}
      >
        Completed
      </button>
      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => handleFilter('active')}
      >
        Active
      </button>
    </div>
  );
};

export default FilterTodo;
