"use client";
import TaskForm from '../components/TaskForm/TaskForm';
export default function Home() {
  
  return (
    <div>
      <h1 className="text-2xl font-serif font-bold text-center pt-5 pb-3 shadow-lg">ToDo List App</h1>
    {/* task form  */}
    <TaskForm />
    </div>
  );
}
