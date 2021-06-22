import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [] ,
    favo : []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers : {
        addProducts: (state, action) => {
         state.items = [...state.items,action.payload]
        },
        remProducts: (state, action) => { 
         const stay = state.items.filter(item => {
             return item.id != action.payload
         })
         state.items = [...stay]
        },
        addFavourite: (state, action) => {
         state.favo = [...state.favo,action.payload]
        },
        remFavourite : (state, action) => { 
         const stay = state.favo.filter(item => {
             return item.id != action.payload
         })
         state.favo = [...stay]
        },
    }
})

export const { addProducts,remProducts,addFavourite,remFavourite } = basketSlice.actions
export const subTotal = (state) => state.basket.items.reduce((total,item) => total + item.price , 0)
export default basketSlice.reducer