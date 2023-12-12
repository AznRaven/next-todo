// "use client";
// import React, { useState } from "react";
import React from "react";
import TodoDelBtn from "./TodoDelBtn";
import TodoEditBtn from "./TodoEditBtn";
import TodoCheckBtn from "./TodoCheckBtn";

const Todo = ({ todo }) => {
  // const [openModalEdit, setOpenModalEdit] = useState(false);

  // const handleOpenModalEdit = () => {
  //   setOpenModalEdit(true);
  // };

  return (
    <>
      <li  className="p-3 my-5 bg-slate-300 flex justify-between shadow-lg  hover:bg-slate-400" key={todo.id}>
        <div className="flex grow">
          {/* <input id={todo.id} className="w-10 h-10 me-5" type="checkbox" /> */}
          <TodoCheckBtn todo={todo}/>
          <label htmlFor={todo.id} className="grow cursor-pointer">
            <h1 className={`text-2xl font-bold ${todo.completed ? 'line-through': ''} dark:text-slate-700`}>{todo.title}</h1>
            <p className="dark:text-slate-600">{todo.item}</p>
          </label>
        </div>
        <div className="flex flex-col justify-around">
          <TodoEditBtn todo={todo}/>
          <TodoDelBtn id={todo.id}/>
        </div>
      </li>
    </>
  );
};

export default Todo;
