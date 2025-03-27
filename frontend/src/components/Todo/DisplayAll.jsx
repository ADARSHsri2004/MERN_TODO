import React, { useEffect, useState } from "react";
import { CheckCircle, Circle, Trash2, Edit, PlusCircle, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../context/AuthSlices";
import { useDispatch, useSelector } from "react-redux";
export default function DisplayAll() {
const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const navigate = useNavigate();
  useEffect(() => {
    if(!isLoggedIn)
    navigate('/login')

  }, [isLoggedIn])
  


  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish Project", description: "Complete the React project for submission.", completed: false },
    { id: 2, title: "Buy Groceries", description: "Get milk, eggs, and bread from the store.", completed: true },
    { id: 3, title: "Workout", description: "Go for a 30-minute jog.", completed: false }
  ]);

  // Toggle Task Completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Update Task (Placeholder Function)
  const updateTask = (id) => {
    alert(`Update Task ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <ListChecks className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Your Tasks</h1>
      </div>

      {/* Task List */}
      <div className="w-full max-w-2xl space-y-4">
        {tasks.map(task => (
          <div
            key={task.id}
            className="relative flex items-center justify-between bg-white shadow-md p-4 rounded-lg hover:bg-blue-50 transition group"
          >
            {/* Completion Checkbox */}
            <button onClick={() => toggleComplete(task.id)} className="mr-3">
              {task.completed ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Circle className="w-6 h-6 text-gray-400" />}
            </button>

            {/* Task Info */}
            <div className="flex-1 relative">
              <h3 className={`font-semibold text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                {task.title}
              </h3>
              {/* Hover Description - Now Above Other Elements */}
              <p className="absolute left-0 -top-10 w-auto px-3 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 z-10 transition">
                {task.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button onClick={() => updateTask(task.id)} className="text-blue-500 hover:text-blue-700">
                <Edit className="w-5 h-5" />
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button className="mt-6 flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md text-lg font-medium hover:bg-blue-600 transition">
        <PlusCircle className="w-6 h-6" /> Add Task
      </button>
    </div>
  );
}
