import {createSlice} from '@reduxjs/toolkit';




export interface  initialTypes{
    cartitems : [],
    totalQantity : number,
    totalPrice: number,
    note:string,
}
const initialState :initialTypes= {
    cartitems : [],
    totalQantity : 0 ,
    totalPrice: 0,
    note:''
}

const cartSlice = createSlice ({
    name : "cart",
    initialState,
    reducers: {
        addToCart:(state,{payload}) =>{
                   state.note= payload.data.note;
    },
   
}    
})


//sellector
export const cartSelector = (state) => state.cart

export default cartSlice.reducer