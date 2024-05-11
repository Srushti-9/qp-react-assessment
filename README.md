# Todo Application

This is a Todo application implemented using React with TypeScript support. It allows users to efficiently manage a large list of tasks, supporting thousands of items. The application provides functionality to add new tasks to the list, mark tasks as completed or incomplete, and supports large text entries for each task.

## Requirements

1. Allow users to mark tasks as completed or incomplete by toggling checkboxes.
2. Ensure efficient performance and scalability to handle a large number of tasks (up to 10,000 items) without significant lag or slowdown.
3. Utilize TypeScript for type-checking and enhanced code quality.
4. Design and implement test cases to ensure the reliability and robustness of the application.

## Installation

To run the Todo application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Srushti-9/qp-react-assessment.git
   ```

2. Navigate to the project directory:

```
cd todo-app
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

Open your browser and visit http://localhost:5173 to view the Todo application.

## Features

- Add new tasks to the list
- Mark tasks as completed or incomplete
- Support for large text entries for each task
- Efficient performance and scalability to handle thousands of tasks

## Technologies Used

- React
- TypeScript
- CSS
- Vite (for fast development server and bundling)

## Performance Optimization and Testing

### Batched State Updates

State updates are batched to minimize unnecessary renders triggered by state changes. Functional updates with the `useState` hook or libraries like `immer` are used for efficient state management.

### Memoization for Rendering Todo Tasks

Memoization techniques such as `React.memo` or custom memoization hooks are used to optimize the rendering of the list of todo tasks. This ensures that only the tasks that have changed are re-rendered, improving overall performance.

### Local Storage Optimization

Tasks are stored in local storage, and efficient read and write operations are implemented to minimize performance overhead. Batch operations are performed where possible, and data compression techniques are used to optimize storage size.

### Testing with Vitest

Test cases are implemented using Vitest to ensure the reliability and robustness of the application. Vitest provides a simple and efficient way to write and run test cases for React components, helping maintain code quality and catch bugs early in the development process.

## Testing

Test cases have been designed and implemented to ensure the reliability and robustness of the application. You can run the tests using the following command:

```
npm test
```
