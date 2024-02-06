"use client";
import { useState } from 'react';
import TaskForm from '../components/TaskForm/TaskForm';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // add new task
  const addTask = (newTask) => {
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = [...existingTasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-center pt-5 pb-3 shadow-lg">ToDo List App</h1>
      {/* TaskForm  */}
      <TaskForm onAddTask={addTask} />
      
    </div>
  );
}
