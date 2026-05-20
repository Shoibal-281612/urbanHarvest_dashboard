import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../../utils/mockData";

const initialState = {
  items: initialProducts,
  searchTerm: "",
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.unshift(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload,
      );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    updateProductStatus: (state, action) => {
      const { id, status } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) product.status = status;
    },
  },
});

export const { addProduct, deleteProduct, setSearchTerm, updateProductStatus } =
  productSlice.actions;
export default productSlice.reducer;
