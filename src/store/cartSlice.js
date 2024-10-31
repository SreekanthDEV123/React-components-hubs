import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["aa"],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action, "jj");
      state.items.push(action.payload.details);
      console.log(state, "ll");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
