import {createSlice} from '@reduxjs/toolkit';




export interface  initialTypes{
    cartitems : [],
    totalQantity : number,
    totalPrice: number
}
const initialState :initialTypes= {
    cartitems : [],
    totalQantity : 0 ,
    totalPrice: 0
}

const cartSlice = createSlice ({
    name : "cart",
    initialState,
    reducers: {
        addToCart:(state,action) =>{
                   const newItem = state;
               },
    },
   
       
})


//sellector
export const cartSelector = (state) => state.cart

export default cartSlice.reducer