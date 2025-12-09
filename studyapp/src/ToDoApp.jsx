import React, { useState } from 'react';

const ToDoApp = () => {
  const [input, setInput] = useState({ task: "" });
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);   // <-- to track edit mode

  function handleInput(e) {
    setInput({ task: e.target.value });
  }

  function handleAdd(e) {
    e.preventDefault();

    if (input.task.trim() === "") return;

    // If user is editing
    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = input.task;
      setItems(updated);

      setEditIndex(null);    // exit edit mode
      setInput({ task: "" });
      return;
    }

    // Normal add case
    setItems(prev => [...prev, input.task]);
    setInput({ task: "" });
  }

  function handleDelete(index) {
    setItems(prev => prev.filter((_, i) => i !== index));
  }

  function handleEdit(index) {
    setInput({ task: items[index] }); // show old task in input
    setEditIndex(index);              // store index being edited
  }

  return (
    <div>
      <input
        placeholder="Enter your task"
        name="task"
        value={input.task}
        onChange={handleInput}
      />

      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <h3>Your Tasks:</h3>

      {items.map((task, index) => (
        
        <p key={index}>
          {task}

          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default ToDoApp;
