import React, { useCallback, useEffect, useState } from "react";
import { CheckCircle, Circle, Trash2, Edit, PlusCircle, ListChecks } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchTasks, updateTask, deleteTask } from "../../context/api";

export default function DisplayAll() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.user?._id); // Get user ID from Redux
let taskIds =useSelector((state)=>state.auth.user.list)
console.log(taskIds[0])

  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  // Fetch tasks from backend
  const loadTasks = useCallback(async () => {
    if (!userId) return;
    try {
        const data = await fetchTasks(userId);

        // Update state only if tasks have changed
        if (JSON.stringify(data.list) !== JSON.stringify(tasks)) { 
            setTasks(data.list);
        }
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
}, [userId, tasks]);

useEffect(() => {
    loadTasks();
}, [loadTasks]); 


  // Toggle Task Completion
  const toggleComplete = async (id, completed) => {
    try {
      await updateTask(id, { completed: !completed });
      console.log(tasks)
      setTasks(tasks.map(task => (task._id === id ? { ...task, completed: !task.completed } : task)));
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  // Delete Task
  const handleDeleteTask = async (id) => {
    try {
      console.log("handleDeleteTask",id)
        await deleteTask(id);
        
        console.log("handledelte",tasks)

        // setTasks(prevTasks => ({
        //     ...prevTasks,
        //     list: prevTasks.filter(task => task.id !== id)  // Ensure only the correct task is deleted
        // }));
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
        console.error("Error deleting task:", error);
    }
};


  // Update Task (Placeholder Function)
  const handleUpdateTask = (id) => {
    alert(`Update Task ${id}`);
  };

  console.log("tasks ")

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <ListChecks className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Your Tasks</h1>
      </div>

      {/* Task List */}
      <div className="w-full max-w-2xl space-y-4">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks available.</p>
        ) : (
          tasks.map(task => (
            <div key={task._id} className="relative flex items-center justify-between bg-white shadow-md p-4 rounded-lg hover:bg-blue-50 transition group">
              {/* Completion Checkbox */}
              <button onClick={() => toggleComplete(task._id, task.completed)} className="mr-3">
                {task.completed ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Circle className="w-6 h-6 text-gray-400" />}
              </button>

              {/* Task Info */}
              <div className="flex-1 relative">
                <h3 className={`font-semibold text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                  {task.title}
                </h3>
                {/* Hover Description */}
                <p className="absolute left-0 -top-10 w-auto px-3 py-1 text-sm bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 z-10 transition">
                  {task.body}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button onClick={() => handleUpdateTask(task._id)} className="text-blue-500 hover:text-blue-700">
                  <Edit className="w-5 h-5" />
                </button>
                <button onClick={() => handleDeleteTask(task?._id)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Task Button */}
      <button onClick={() => navigate("/addTask")} className="mt-6 flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md text-lg font-medium hover:bg-blue-600 transition">
        <PlusCircle className="w-6 h-6" /> Add Task
      </button>
    </div>
  );
}
