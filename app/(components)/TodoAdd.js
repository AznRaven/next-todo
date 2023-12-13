"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import axios from "axios";

const TodoAdd = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const handleAdd = () => {
    console.log("hello");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/todos", input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInput({});
        setModalOpen(false);
        router.refresh();
      });
  };
  const handleChange=(e)=>{
    const name = e.target.name
    const value = e.target.value
    setInput((preState) => ({...preState, [name]: value}))
  }
  return (
    <div>
      <button
        className=" w-fit text-fit px-5 py-2 font-bold border border-slate-700"
        onClick={() => setModalOpen(true)}
      >
        Add
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3 font-bold">Add Todo Item</h1>
          <input
            type="text"
            value={input.title}
            onChange={handleChange}
            placeholder="Title"
            name="title"
            className="w-full p-2 my-5"
          />
          <input
            type="text"
            value={input.item}
            onChange={handleChange}
            placeholder="Description"
            name="item"
            className="w-full p-2 my-5"
          />
          <button
            type="submit"
            className="bg-blue-700 px-5 py-2 text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TodoAdd;
