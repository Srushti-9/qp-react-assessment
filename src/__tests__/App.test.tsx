import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders App component with default state", async () => {
  const { getByText, queryByText } = render(<App />);

  // Assert that the title is rendered
  expect(getByText("Todo App")).toBeDefined();

  // Assert that the Add Task button is rendered
  const addTaskButton = getByText("Add Task");
  expect(addTaskButton).toBeDefined();

  // Assert that the AddTodoForm is not initially rendered
  expect(queryByText("Task Title")).toBeNull();
  expect(queryByText("Task Description")).toBeNull();

  // Assert that the TodoList is rendered
  const todoList = queryByText("Todo List");
  expect(todoList).toBeDefined();
});

test("toggles AddTodoForm visibility on Add Task button click", async () => {
  const { getByText, queryByText } = render(<App />);

  // Click on the Add Task button to show AddTodoForm
  const addTaskButton = getByText("Add Task");
  fireEvent.click(addTaskButton);

  // Assert that the AddTodoForm is rendered
  const taskTitleInput = queryByText("Task Title");
  const taskDescriptionInput = queryByText("Task Description");
  expect(taskTitleInput).toBeDefined();
  expect(taskDescriptionInput).toBeDefined();

  // Click on the Add Task button again to hide AddTodoForm
  fireEvent.click(addTaskButton);

  // Assert that the AddTodoForm is not rendered
  expect(queryByText("Task Title")).toBeNull();
  expect(queryByText("Task Description")).toBeNull();
});
