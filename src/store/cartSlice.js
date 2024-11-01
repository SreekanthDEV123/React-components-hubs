import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    luxury: ["aa"],
    hotels: [1, 2, 3, 4],
    gadgets: ["soap"],
  },
  reducers: {
    removeFromCart: (state, action) => {
      console.log("just");
    },
    addToCart: (state, action) => {
      console.log(action, "jj");
      state.items.push(action.payload.details);
      console.log(state, "ll");
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
