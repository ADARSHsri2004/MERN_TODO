const API_URL = "https://mern-todo-server-henna.vercel.app/api/v2";

// Fetch all tasks
export const fetchTasks = async (userId) => {
    const response = await fetch(`${API_URL}/getTask/${userId}`, { method: "GET", credentials: "include" });
    return response.json();
};

// Add a new task
export const addTask = async (task) => {
    const response = await fetch(`${API_URL}/addTask`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return response.json();
};

// Update a task
export const updateTask = async (taskId, task) => {
    const response = await fetch(`${API_URL}/updateTask/${taskId}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return response.json();
};

// Delete a task
export const deleteTask = async (taskId) => {
    
    await fetch(`${API_URL}/deleteTask/${taskId}`, { method: "DELETE", credentials: "include" });
    return taskId;
};
