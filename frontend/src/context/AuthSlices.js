import { createSlice } from "@reduxjs/toolkit";

// Get initial state from localStorage
let isLoggedInFromStorage = localStorage.getItem("isLoggedIn") === "true";
const userfromstorage =  JSON.parse(localStorage.getItem("user")) || null;

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: isLoggedInFromStorage, user:userfromstorage },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", "true"); 
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", "false");
            
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user) );
        }
       
    },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
