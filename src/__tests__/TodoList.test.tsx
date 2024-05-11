import { expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { Todo } from "../types/Todo";

// Mock todos data for testing
const mockTodos: Todo[] = [
  { id: 1, text: "Todo 1", completed: false, description: "Todo 1 desc " },
  { id: 2, text: "Todo 2", completed: true, description: "Todo 2 desc " },
  { id: 3, text: "Todo 3", completed: false, description: "Todo 3 desc " },
];

test("renders TodoList component with default 'All' filter", async () => {
  // Render TodoList component with mockTodos
  const { getByText } = render(
    <TodoList todos={mockTodos} toggleTodo={() => {}} />
  );

  // Assert that 'All' filter button is active
  expect(getByText("All").className).toContain("active");

  // Assert that all todos are rendered
  mockTodos.forEach((todo) => {
    expect(getByText(todo.text)).toBeDefined();
  });
});

test("renders TodoList component with 'Completed' filter", async () => {
  // Render TodoList component with mockTodos
  const { getByText, queryByText } = render(
    <TodoList todos={mockTodos} toggleTodo={() => {}} />
  );

  // Click on 'Completed' filter button
  fireEvent.click(getByText("Completed"));

  // Assert that 'Completed' filter button is active
  expect(getByText("Completed").className).toContain("active");

  // Assert that only completed todos are rendered
  mockTodos.forEach((todo) => {
    if (todo.completed) {
      expect(getByText(todo.text)).toBeDefined();
    } else {
      expect(queryByText(todo.text)).toBeNull();
    }
  });
});

test("renders TodoList component with 'Active' filter", async () => {
  // Render TodoList component with mockTodos
  const { getByText, queryByText } = render(
    <TodoList todos={mockTodos} toggleTodo={() => {}} />
  );

  // Click on 'Active' filter button
  fireEvent.click(getByText("Active"));

  // Assert that 'Active' filter button is active
  expect(getByText("Active").className).toContain("active");

  // Assert that only active todos are rendered
  mockTodos.forEach((todo) => {
    if (!todo.completed) {
      expect(getByText(todo.text)).toBeDefined();
    } else {
      expect(queryByText(todo.text)).toBeNull();
    }
  });
});
