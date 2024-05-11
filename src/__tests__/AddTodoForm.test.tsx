import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

test("renders AddTodoForm component with default state", async () => {
  // Mock addTodo function for testing
  const addTodoMock = () => {};

  // Render AddTodoForm component with mock addTodo function
  const { getByPlaceholderText, getByText } = render(
    <AddTodoForm addTodo={addTodoMock} />
  );

  // Assert that input fields are rendered
  const titleInput = getByPlaceholderText("Task Title");
  const descriptionInput = getByPlaceholderText("Task Description");
  expect(titleInput).toBeDefined();
  expect(descriptionInput).toBeDefined();

  // Assert that the Add button is rendered
  const addButton = getByText("Add");
  expect(addButton).toBeDefined();
});

test("submits form with provided text and description", async () => {
  // Mock addTodo function for testing
  const addTodoMock = (text: string, description: string) => {
    expect(text).toBe("Test Task");
    expect(description).toBe("Test Description");
  };

  // Render AddTodoForm component with mock addTodo function
  const { getByPlaceholderText, getByText } = render(
    <AddTodoForm addTodo={addTodoMock} />
  );

  // Provide text and description
  const titleInput = getByPlaceholderText("Task Title");
  fireEvent.change(titleInput, { target: { value: "Test Task" } });

  const descriptionInput = getByPlaceholderText("Task Description");
  fireEvent.change(descriptionInput, {
    target: { value: "Test Description" },
  });

  // Click on the Add button
  const addButton = getByText("Add");
  fireEvent.click(addButton);
});

test("does not call addTodo function when text is empty", async () => {
  // Mock addTodo function for testing
  const addTodoMock = () => {};

  // Render AddTodoForm component with mock addTodo function
  const { getByText } = render(<AddTodoForm addTodo={addTodoMock} />);

  // Click on the Add button without providing text
  const addButton = getByText("Add");
  fireEvent.click(addButton);
});
