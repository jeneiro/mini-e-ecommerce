import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";

// Define User, Geo, Address, and Company interfaces as you did
interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

// Fetch Users
export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data as User[];
});

// Update User
export const updateUserApi = createAsyncThunk(
  "users/updateUserApi",
  async (user: User) => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      user
    );
    return response.data as User;
  }
);

// Delete User
export const deleteUserApi = createAsyncThunk(
  "users/deleteUserApi",
  async (userId: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return userId;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      // Update User
      .addCase(updateUserApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserApi.fulfilled, (state, action) => {
        const index = state.data.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateUserApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update user";
      })
      // Delete User
      .addCase(deleteUserApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserApi.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteUserApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
      });
  },
});


export const allUsers = (state: RootState) => state.users.data;
export default usersSlice.reducer;
