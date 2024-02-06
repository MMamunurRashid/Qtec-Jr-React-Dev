"use client";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import Task from "../components/Task/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // add new task
  const addTask = (newTask) => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // edit task
  const onUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // delete task
  const onDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  // Mark task as complete
  const onMarkComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); 
    setTasks(updatedTasks);
  };

  // sort 
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed === b.completed) {
      
      return 0;
    }
   
    return a.completed ? 1 : -1;
  });

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-serif font-bold text-center pt-5 pb-3 shadow-lg">
        ToDo List App
      </h1>
      {/* TaskForm  */}
      <TaskForm onAddTask={addTask} />

      {/* Task Cards */}
      <div className="flex justify-between ml-3 mr-5 md:ml-10 md:mr-20">
        <h1 className="text-xl font-serif  font-bold">Task List: </h1>
        <div>
          <p>Sort</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-10">
        {sortedTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            onMarkComplete={onMarkComplete}
          />
        ))}
      </div>
    </div>
  );
}
