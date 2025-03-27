import { createSlice } from "@reduxjs/toolkit";

// Get initial state from localStorage
const isLoggedInFromStorage = localStorage.getItem("isLoggedIn") === "true";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: isLoggedInFromStorage },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", "true");
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", "false");
            
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
