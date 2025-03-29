import React, { useState,useEffect } from "react";
import { PlusCircle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskThunk } from "../../context/TaskSlice";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
    const navigate = useNavigate();
    let isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    useEffect(() => {
        if (!isLoggedIn)
            navigate('/login')

    }, [isLoggedIn])
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !body) return alert("Please fill in all fields");

        try {
            await dispatch(addTaskThunk({ title, body })).unwrap();
            setTitle("");
            setBody("");
            alert("Task added successfully!");
        } catch (error) {
            alert("Failed to add task");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 px-4">
            {/* Task Form Card */}
            <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-lg shadow-lg flex flex-col">
                <div className="flex justify-center">
                    <PlusCircle className="w-16 h-16 text-purple-500 mb-4" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">Add New Task</h2>
                <p className="text-sm text-gray-600 text-center mt-2">Stay organized by adding your tasks here.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {/* Title Input */}
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Body Input (Auto Expanding) */}
                    <textarea
                        placeholder="Task Details"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full p-3 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none overflow-hidden"
                        rows={1}
                        onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = e.target.scrollHeight + "px";
                        }}
                    />

                    {/* Add Task Button */}
                    <button
                        type="submit" onClick={()=>{navigate('/displayAll')}}
                        className="w-full bg-purple-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition"
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
}
