"use client";
import React, { useState } from "react";
import TodoDelBtn from "./TodoDelBtn";

const Todo = ({ todo }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
  };

  return (
    <>
      <li className="p-3 my-5 bg-slate-300 flex justify-between shadow-lg" key={todo.id}>
        <div>
          <input className="w-10 h-10 me-5" type="checkbox" />
          <div>
            <h1 className="text-2xl font-bold">{todo.title}</h1>
            <p>{todo.item}</p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <button
            className="text-blue-700 mr-3"
            onClick={() => setOpenModalEdit(true)}
          >
            Edit
          </button>
          <TodoDelBtn id={todo.id}/>
        </div>
      </li>
    </>
  );
};

export default Todo;
