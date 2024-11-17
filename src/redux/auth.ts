import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
interface userData {
  id: string;
  firstname: string;
  lastname: string;
  othername: string;
  email: string;
  username: string;
  phonenumber: string;
  userType: string;
  isActive: boolean;
}
interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
  user: userData | null;
  sessionRestored: boolean; //this is to improve user experience on refresh
}
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
  user: null,
  sessionRestored: false
};
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const base_url = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      if (!emailRegex.test(email)) {
        return thunkAPI.rejectWithValue("Invalid email format");
      }
      const response = await axios.post(`${base_url}/auth/login`, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(
          error.response.data.message || "Login failed"
        );
      }
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);
export const restoreSession = createAction("auth/restoreSession");
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.userData;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.userData));
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      })
      .addCase(restoreSession, (state) => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token && user) {
          state.token = token;
          state.user = JSON.parse(user);
        }
        state.sessionRestored = true; // Mark session restoration as complete
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
