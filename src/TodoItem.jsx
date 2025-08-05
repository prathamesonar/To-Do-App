import React from 'react';

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-md transition-all
      ${todo.completed ? 'bg-green-300 text-black' : 'bg-purple-300 text-black'}`}>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="mr-3 w-4 h-4"
        />
        <span className={`${todo.completed ? 'line-through text-gray-600' : ''}`}>
          {todo.text}
        </span>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-white hover:bg-yellow-300 p-2 rounded text-sm"
          disabled={todo.completed}
        >
          ✏️
        </button>
        <button
          onClick={onDelete}
          className="bg-white hover:bg-red-500 hover:text-white p-2 rounded text-sm"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
