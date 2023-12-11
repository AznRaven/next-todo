import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((x) => (
        <Todo key={x.id} todo={x} />
      ))}
    </ul>
  );
};

export default TodoList;
