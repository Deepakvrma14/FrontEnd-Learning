import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount:0,
    total:0,
    loading:true,
};

const cartSlice  = createSlice({
    name:'cart',
    initialState,
    reducers: {
        clearCart: (state) =>{
            state.cartItems = [];
        },
        removeItem: (state, action) =>{
            const newCartItems = state.cartItems.filter((item)=>item.id !== action.payload);
            state.cartItems = newCartItems;
        },
        increaseAmount: (state, {payload}) =>{
            const cartItem = state.cartItems.find((item)=>item.id ===payload.id);
            cartItem.amount++;
        },
        decreaseAmount: (state, {payload})=>{
            const cartItem = state.cartItems.find((item) =>item.id === payload.id);
            cartItem.amount--;
        },
        calculateTotal: (state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total+= item.amount * item.price;
                
            });
            state.amount = amount;
            state.total = total;
        }
    }
});
export const {clearCart, removeItem, decreaseAmount, increaseAmount, calculateTotal} = cartSlice.actions;
console.log(cartSlice);
export default cartSlice.reducer;