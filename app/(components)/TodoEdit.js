import React, { useState } from "react";

const TodoEdit = () => {
  const [todoEdit, setTodoEdit] = useState(todo);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <div>
      <button
        className="text-blue-700 mr-3"
        onClick={() => setOpenModalEdit(true)}
      >
        Edit
      </button>

      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form className="w-full" onSubmit={handleEditSubmit}>
          <h1 className="text-2xl pb-3">Add New Post</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-2"
            value={todoEdit.title || ""}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Description"
            name="description"
            className="w-full p-2 my-5"
            value={todoEdit.description || ""}
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

export default TodoEdit;
