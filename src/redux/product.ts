import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductData {
  product_id: string;
  product_name: string;
  image: string; 
  description: string;
  price: string;
}

interface ProductState {
  products: ProductData[]; 
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const base_url = process.env.REACT_APP_BASE_URL;

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: ProductData, thunkAPI) => {
    try {
      const response = await axios.post(`${base_url}/add/product`, product);
      return response.data; 
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message || "Failed to add product");
      }
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); 
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      });
  },
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
