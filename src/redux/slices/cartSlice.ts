import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage";
// import type { RootState } from '../store'

// Define a type for the slice state
interface CartAddState {
  id: string | number;
  name: string;
  info: string;
  image: string;
}

interface CartRemoveState {
  id: string | number;
}

// Define the initial state using that type
const initialState: CartAddState[] =  getItem('cart') || [] ;

export const cartSlice = createSlice({
  name: "cart",

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    addToCardt: (state, action: PayloadAction<CartAddState>) => {
      
      const {id} = action.payload

      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload)
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
      const {id} = action.payload
      if(state.some((item)=> item.id === id)){
        return state = state.filter((item)=> item.id !== id)

      }
    },
  },
});

export const { addToCardt, removeToCart } = cartSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer
