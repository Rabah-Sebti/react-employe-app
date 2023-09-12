import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "light",
  userId: "64dbc39bf2caf6d4a59ee8a3",
  user: "",
  token: null,
  users: [],
  loading: false,
  error: null,
};
export const getSalaries = createAsyncThunk("salaries", async () => {
  const resp = await fetch("http://localhost:4000/api/salaries");
  const res = resp.json();
  return res;
});
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      debugger;
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setCredentials: (state, action) => {
      debugger;
      const { user, token } = action.payload;
      state.user = user.name;
      state.token = token;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: {
    [getSalaries.pending]: (state, action) => {
      state.loading = true;
    },
    [getSalaries.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getSalaries.rejected]: (state) => {
      state.loading = false;
      state.error = "error";
    },
  },
});
export const { setMode, setCredentials, logOut } = globalSlice.actions;
export default globalSlice.reducer;
