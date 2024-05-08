// src/components/AddTodoForm.tsx
import React, { useState } from "react";
import "../styles/AddTodoForm.css";

interface AddTodoFormProps {
  addTodo: (text: string, description: string) => void;
}

function AddTodoForm({ addTodo }: AddTodoFormProps) {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text, description);
    setText("");
    setDescription("");
  };

  return (
    <div className="add-todo-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task Title"
            maxLength={50} // Set maximum length
          />
        </div>
        <div className="input-container">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            maxLength={200} // Set maximum length
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
