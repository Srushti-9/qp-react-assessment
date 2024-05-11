import { expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoItem from "../components/TodoItem";
import { Todo } from "../types/Todo";

test("renders TodoItem component with default state", async () => {
  // Mock todo data for testing
  const mockTodo: Todo = {
    id: 1,
    text: "Example Todo",
    description: "This is an example description",
    completed: false,
  };

  // Render TodoItem component with mockTodo
  const { getByText, queryByText } = render(
    <TodoItem todo={mockTodo} toggleTodo={() => {}} />
  );

  // Assert that the todo text is rendered
  expect(getByText(mockTodo.text)).toBeDefined();

  // Assert that the todo description is not initially rendered
  expect(queryByText(mockTodo.description)).toBeNull();
});

test("toggles expanded state on title click", async () => {
  // Mock todo data for testing
  const mockTodo: Todo = {
    id: 1,
    text: "Example Todo",
    description: "This is an example description",
    completed: false,
  };

  // Render TodoItem component with mockTodo
  const { getByText, getByTestId } = render(
    <TodoItem todo={mockTodo} toggleTodo={() => {}} />
  );

  // Click on the title to expand
  fireEvent.click(getByText(mockTodo.text));

  // Wait for a brief moment for the description element to appear
  setTimeout(() => {
    // Assert that the description element is rendered
    const descriptionElement = getByTestId("todo-description");
    if (!descriptionElement) {
      throw new Error("Description element not found");
    }

    // Click on the title again to collapse
    fireEvent.click(getByText(mockTodo.text));

    // Wait for a brief moment for the description element to be removed
    setTimeout(() => {
      // Assert that the description element is no longer rendered
      const descriptionElementAfterCollapse = getByTestId("todo-description");
      if (descriptionElementAfterCollapse) {
        throw new Error("Description element found when it shouldn't be");
      }
    }, 100); // Adjust the timeout value as needed
  }, 100); // Adjust the timeout value as needed
});
