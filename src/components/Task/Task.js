import { useState } from "react";

const Task = ({ task, onUpdateTask, onDeleteTask, onMarkComplete }) => {
  const [editedTask, setEditedTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateTask(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };
  
  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleComplete = () => {
    onMarkComplete(task.id);
  };

  return (
    <div>
      <div
        className={`shadow-lg rounded-lg p-4 mb-4 
          ${
            task.completed
              ? "bg-green-200"
              : task.priority === "high"
              ? "bg-red-100"
              : task.priority === "medium"
              ? "bg-yellow-50"
              : "bg-cyan-100"
          }`}
      >
        <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-2">{task.description}</p>
        <p className="text-gray-500 mb-2">Priority: {task.priority}</p>
        <p className="text-gray-500 mb-2">Due Date: {task.dueDate}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
          {task.completed ? (
            <button
              onClick={handleComplete}
              className="px-4 py-2 rounded-lg text-white bg-green-500"
            >
              Completed
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="px-4 py-2 rounded-lg text-white bg-green-500"
            >
              Mark Complete
            </button>
          )}
        </div>
      </div>

      {/* Modal for Editing Task */}
      {isEditing && (
        <div
          id="edit-task-modal"
          className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Edit Task</h2>
            <input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              placeholder="Title"
              className="border border-gray-200 px-4 py-2 mb-2 rounded-lg w-full"
            />
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-200 px-4 py-2 mb-2 rounded-lg w-full h-24"
            />
            <select
              name="priority"
              value={editedTask.priority}
              onChange={handleChange}
              className="border border-gray-200 px-4 py-2 mb-2 rounded-lg w-full"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <input
              type="date"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={handleChange}
              className="border border-gray-200 px-4 py-2 mb-2 rounded-lg w-full"
            />
            <div className="flex justify-center">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
