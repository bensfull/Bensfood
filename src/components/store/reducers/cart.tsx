import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish } from "../../../pages/Profile";


type CartState = {
  items: Dish[]
  isOpen: boolean

  }

  const initialState: CartState = {
    items: [],
    isOpen: false
  }

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if(!game){
        state.items.push(action.payload)
      } else{
        alert('O jogo já está no carrinho')
        }
      },
      remove: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
      },
      open:(state) =>{
        state.isOpen = true
      },
      close:(state) =>{
        state.isOpen = false
      }
    }
  })
  export const { add, open, close, remove } = cartSlice.actions
  export default cartSlice.reducer
