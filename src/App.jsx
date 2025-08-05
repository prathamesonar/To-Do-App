import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if (!newTodo.trim()) return;

    if (editingIndex !== null) {
      const updated = [...todos];
      updated[editingIndex].text = newTodo;
      setTodos(updated);
      setEditingIndex(null);
    } else {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }

    setNewTodo('');
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    const todo = todos[index];
    if (todo.completed) return; 
    setNewTodo(todo.text);
    setEditingIndex(index);
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <div className="min-h-screen bg-[#0a1930] flex flex-col items-center pt-20 px-4">
      <h1 className="text-white text-3xl font-bold mb-6">Manage Your Todos</h1>

      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Write Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600"
        >
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <div className="w-full max-w-md space-y-3">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(index)}
            onEdit={() => editTodo(index)}
            onToggle={() => toggleComplete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

