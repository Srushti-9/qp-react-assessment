// src/components/TodoList.tsx
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import "../styles/TodoList.css";
import { useMemo, useState } from "react";
import { FixedSizeList as List } from "react-window";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

enum Filter {
  All = "all",
  Completed = "completed",
  Active = "active",
}

// Use Memoization to cache the results of previous renders, avoiding unnecessary re-renders when props or state haven't changed.
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

  const memoizedTodos = useMemo(() => {
    const Row = ({
      index,
      style,
    }: {
      index: number;
      style: React.CSSProperties;
    }) => {
      const todo = filteredTodos[index];
      return (
        <div style={style}>
          <TodoItem todo={todo} toggleTodo={toggleTodo} />
        </div>
      );
    };

    return Row;
  }, [todos, toggleTodo]);

  // Implements virtualized list rendering for efficient performance with large datasets.
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
      <List
        height={400}
        itemCount={filteredTodos.length}
        itemSize={50}
        width={300}
      >
        {memoizedTodos}
      </List>
    </div>
  );
}

export default TodoList;
