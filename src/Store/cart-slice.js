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
      state.totalQuantity++;
      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
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
    removeItemFromCart(state, action) {
      const id=action.payload;
      const exisitingItem=state.items.find(item=> item.id === id);
      state.totalQuantity--;
      if(exisitingItem===1){
        state.items.filter(item=>item.id !==id)
      } else{
        exisitingItem.quantity--
      }
    },
  },
});

export const cartActions= cartSlice.actions;

export default cartSlice
