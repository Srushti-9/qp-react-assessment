// src/components/TodoList.tsx
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import "../styles/TodoList.css";
import { useMemo, useState } from "react";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

enum Filter {
  All = "all",
  Completed = "completed",
  Active = "active",
}

function TodoList({ todos, toggleTodo }: TodoListProps) {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case Filter.Completed:
        return todo.completed;
      case Filter.Active:
        return !todo.completed;
      default:
        return true;
    }
  });

  const memoizedTodoItems = useMemo(
    () =>
      filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      )),
    [filteredTodos, toggleTodo]
  );

  return (
    <div className="todo-list-container">
      <div className="filter-buttons">
        <button
          className={filter === Filter.All ? "active" : ""}
          onClick={() => setFilter(Filter.All)}
        >
          All
        </button>
        <button
          className={filter === Filter.Completed ? "active" : ""}
          onClick={() => setFilter(Filter.Completed)}
        >
          Completed
        </button>
        <button
          className={filter === Filter.Active ? "active" : ""}
          onClick={() => setFilter(Filter.Active)}
        >
          Active
        </button>
      </div>
      <div className="todo-items">{memoizedTodoItems}</div>
    </div>
  );
}

export default TodoList;
