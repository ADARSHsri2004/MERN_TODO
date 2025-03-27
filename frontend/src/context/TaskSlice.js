import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks, addTask, updateTask, deleteTask } from "./api"; // Import API functions

// Async actions
export const fetchTasksThunk = createAsyncThunk("tasks/fetchTasks", fetchTasks);
export const addTaskThunk = createAsyncThunk("tasks/addTask", addTask);
export const updateTaskThunk = createAsyncThunk("tasks/updateTask", async ({ taskId, task }) => updateTask(taskId, task));
export const deleteTaskThunk = createAsyncThunk("tasks/deleteTask", deleteTask);

// Slice
const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.fulfilled, (state, action) => { state.list = action.payload.list; })
      .addCase(addTaskThunk.fulfilled, (state, action) => { state.list.push(action.payload.list); })
      .addCase(updateTaskThunk.fulfilled, (state, action) => {
        state.list = state.list.map(task => (task._id === action.payload._id ? action.payload : task));
      })
      .addCase(deleteTaskThunk.fulfilled, (state, action) => {
        state.list = state.list.filter(task => task._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
