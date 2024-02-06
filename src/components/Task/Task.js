const Task = ({ task }) => {
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
          <button className="px-4 py-2 rounded-lg text-white bg-green-500">
            Mark Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
