// src/components/TodoItem.tsx
import { Todo } from "../types/Todo";
import { useState } from "react";
import "../styles/TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

function TodoItem({ todo, toggleTodo }: TodoItemProps) {
  const [expanded, setExpanded] = useState(false);

  const handleTitleClick = () => {
    setExpanded(!expanded);
  };

  const titleClass = todo.completed ? "completed" : "";

  return (
    <div className={`todo-item ${expanded ? "expanded" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="checkbox"
      />
      <div className="title-container" onClick={handleTitleClick}>
        <span className={`title ${titleClass}`}>{todo.text}</span>
        {expanded && <p className="description">{todo.description}</p>}
      </div>
    </div>
  );
}

export default TodoItem;
