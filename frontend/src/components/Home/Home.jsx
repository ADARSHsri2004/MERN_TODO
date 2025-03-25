import React,{ useState } from "react";
import { CheckCircle, PlusCircle, Sparkles } from "lucide-react";

export default function HomePage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React project", completed: true },
    { id: 2, text: "Buy groceries", completed: false },
    { id: 3, text: "Read a book", completed: false },
  ]);

  return (
    <div className="bg-gray-100">
      {/* Hero Section - Fullscreen */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Organize Your Tasks Effortlessly</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Manage your daily tasks efficiently with our simple Todo App.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-lg text-lg font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>

      {/* Task Summary */}
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <div className="grid gap-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {task.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <PlusCircle className="text-gray-500" />
                )}
                <span className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Features Section */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Exciting Features Coming Soon!</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're constantly improving. Expect features like reminders, collaboration, and more!
        </p>
        <div className="flex justify-center mt-6">
          <Sparkles className="text-yellow-500 w-12 h-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
