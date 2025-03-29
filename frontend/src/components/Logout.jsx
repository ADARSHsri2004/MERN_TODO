

const logoutUser = async () => {
  try {
    
    const response = await fetch("https://mern-todo-server-henna.vercel.app/api/v1/logout", {
      method: "POST",
      credentials: "include", // Ensures cookies are sent
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      localStorage.removeItem("isLoggedIn"); // Remove login state
    
      window.location.reload(); // Refresh page or update UI accordingly
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export default logoutUser;
