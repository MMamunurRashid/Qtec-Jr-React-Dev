const TaskForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const priority = e.target.priority.value;
    console.log(title, description, priority);
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 flex flex-col w-1/2 mx-auto">
      <h1 className="text-xl text-center mb-2 font-serif font-semibold">
        Add a New Task
      </h1>

      
        <label>Add Task Title</label>
        <input
          type="text"
          name="title"
          placeholder="Add a new task title..."
          className="border border-gray-200 px-4 py-2 mb-2 rounded-lg  w-full"
        />
   
    
        <label>Add Task Description</label>
        <input
          type="text"
          name="description"
          placeholder="Add a new task description..."
          className="border border-gray-200 px-4 py-2 mb-2 rounded-lg  w-full"
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
     

      <div className="flex justify-center">
      <button
        type="submit"
        className="ml-2 bg-blue-500 text-white py-2 px-16 rounded-lg w-1/2"
      >
        Add Task
      </button>
      </div>
    </form>
  );
};

export default TaskForm;
