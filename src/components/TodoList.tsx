// src/components/TodoList.tsx
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import "../styles/TodoList.css";
import { useMemo } from "react";
import { FixedSizeList as List } from "react-window";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

// Use Memoization to cache the results of previous renders, avoiding unnecessary re-renders when props or state haven't changed.
function TodoList({ todos, toggleTodo }: TodoListProps) {
  const memoizedTodos = useMemo(() => {
    const Row = ({
      index,
      style,
    }: {
      index: number;
      style: React.CSSProperties;
    }) => {
      const todo = todos[index];
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
      <List height={400} itemCount={todos.length} itemSize={50} width={300}>
        {memoizedTodos}
      </List>
    </div>
  );
}

export default TodoList;
