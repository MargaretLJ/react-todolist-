import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const Todolist = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: Math.random(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo=id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
    <h1>Srujana</h1>
      <TodoForm addTodos={addTodos} />
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};
