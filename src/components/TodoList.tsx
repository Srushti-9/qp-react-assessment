// src/components/TodoList.tsx
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";
import "../styles/TodoList.css";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
