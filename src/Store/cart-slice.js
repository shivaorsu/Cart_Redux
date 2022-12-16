import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exisitingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.totalPrice,
          title:newItem.title
        });
      }else{
        exisitingItem.quantity++;
        exisitingItem.totalPrice=exisitingItem.totalPrice+newItem.price;
      }
    },
    removeItemFromCart() {},
  },
});