"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "./Modal";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const TodoEditBtn = ({ todo }) => {
  const router = useRouter();

  const [todoToEdit, setTodoToEdit] = useState(todo);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/todos/${todo.id}`, todoToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalEdit(false);
        router.refresh();
      });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodoToEdit((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <button
        className="text-blue-700 mr-3"
        onClick={() => setOpenModalEdit(true)}
      >
        <PencilSquareIcon className="h-6 w-6 text-blue-600 hover:text-blue-100 hover:animate-bounce" />
        
      </button>
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form className="w-full" onSubmit={handleEditSubmit}>
          <h1 className="text-2xl pb-3">Edit Todo Item</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-2"
            value={todoToEdit.title || ""}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="item"
            className="w-full p-2 my-5"
            value={todoToEdit.item || ""}
            onChange={handleChange}
          />

          <button type="submit" className="bg-blue-700 text-white px-5 py-2">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default TodoEditBtn;
