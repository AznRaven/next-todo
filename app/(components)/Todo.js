import React from "react";

const Todo = ({ todo }) => {
  return (
    <>
      <li className="p-3 my-5 bg-slate-200 flex" key={todo.id}>
        <input className="w-10 h-10 me-5" type="checkbox"  />
        <div>
          <h1 className="text-2xl font-bold">{todo.title}</h1>
          <p>{todo.item}</p>
        </div>
      </li>
    </>
  );
};

export default Todo;
