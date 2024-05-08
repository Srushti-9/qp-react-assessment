// src/App.tsx
import { useState, useEffect } from "react";
import { Todo } from "./types/Todo";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import "./App.css"; // Import CSS for styling

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [showAddForm, setShowAddForm] = useState(false); // State to control visibility of add form

  // Update local storage when todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, description: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
      description,
    };
    setTodos([newTodo, ...todos]);
    setShowAddForm(false); // Hide add form after adding todo
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleAddTask = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <button className="add-task-button" onClick={() => toggleAddTask()}>
        Add Task
      </button>
      {showAddForm && <AddTodoForm addTodo={addTodo} />}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
