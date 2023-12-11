"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const TodoDelBtn = ({ id }) => {
  console.log(id);
  const router = useRouter();
  const handleDeletePost = (id) => {
    console.log(id);
    axios
      .delete(`/api/todos/${id}`)
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
  return (
    <div>
      <button
        className="text-red-700 mr-3"
        onClick={() => handleDeletePost(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoDelBtn;
