import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItem from "../src/components/TodoItem";

describe("TodoItem", () => {
  const todo = {
    id: 1,
    text: "Test Todo",
    description: "This is a test todo item",
    completed: false,
  };

  test("renders todo text", () => {
    const { getByText } = render(
      <TodoItem todo={todo} toggleTodo={() => {}} />
    );
    expect(getByText("Test Todo")).toBeInTheDocument();
  });

  test("toggles todo completion status when clicked", () => {
    const toggleTodo = jest.fn();
    const { getByText } = render(
      <TodoItem todo={todo} toggleTodo={toggleTodo} />
    );
    fireEvent.click(getByText("Test Todo"));
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });
});
