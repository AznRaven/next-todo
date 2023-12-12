'use client'
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

const TodoCheckBtn = ({ todo }) => {
    const router = useRouter()
    const handleChange = (e) => {
        e.preventDefault();
        axios
          .patch(`/api/todos/${todo.id}`, {completed: !todo.completed})
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            router.refresh();
          });
      };
  console.log(todo.id);
  return (
    <input
      id={todo.id}
      className="w-10 h-10 me-5"
      type="checkbox"
      checked={todo.completed}
      onClick={handleChange}
    />
  );
};

export default TodoCheckBtn;
