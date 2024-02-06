import { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    const dueDate = e.target.dueDate.value;

    const options = {
      timeZone: "Asia/Dhaka",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const bangladeshiDateTime = new Date().toLocaleString("en-US", options);

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      date: bangladeshiDateTime,
      dueDate: dueDate,
      title: title,
      description: description,
      priority: priority,
      completed: false,
    };

    onAddTask(newTask);
    e.target.reset();
     document.getElementById("add-task-modal").close()

  };

  return (
    <div className="">
   
      <button
        onClick={() => document.getElementById("add-task-modal").showModal()}
        className="ml-2 mt-5 mb-5 mx-auto bg-blue-500 text-white py-2 px-16 rounded-lg "
      >
        Add a New Task
      </button>
     
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="add-task-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <form
              onSubmit={handleSubmit}
              className="my-4 flex flex-col w-full mx-auto"
            >
              <h1 className="text-xl text-center mb-2 font-serif font-semibold">
                Add a New Task
              </h1>

              <label>Add Task Title</label>
              <input
                type="text"
                name="title"
                required
                placeholder="Add a new task title..."
                className="border border-gray-200 px-4 py-2 mb-2 rounded-lg  w-full"
              />

              <label>Add Task Description</label>
              <textarea
                type="text"
                name="description"
                required
                placeholder="Add a new task description..."
                className="border border-gray-200 px-4 py-2 mb-2 rounded-lg  w-full h-[80px]"
              />

              <label>Add Task Priority</label>
              <select
                name="priority"
                className="border border-gray-200 px-4 py-2 mb-2 rounded-lg  w-full"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <label>Add Due Date</label>
              <input
                type="date"
                name="dueDate"
                className="border border-gray-200 px-4 py-2 mb-2 rounded-lg w-full"
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="ml-2 bg-blue-500 text-white py-2 px-16 rounded-lg w-1/2"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TaskForm;
