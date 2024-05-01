/* eslint-disable react/prop-types */
import { useState } from "react";

export const TodoForm = ({addTodos}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(value);
    setValue("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is the task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
};
