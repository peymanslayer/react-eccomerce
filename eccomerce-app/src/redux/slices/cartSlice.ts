import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: 0,
  },
  reducers: {
    increment: (state) => {
      state.cart += 1
    },
    decrement: (state) => {
      state.cart -= 1
    },
    incrementByAmount: (state, action) => {
      state.cart += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = cartSlice.actions

export const selectCount = (state: { counter: { value: number } }) => state.counter.value

export default cartSlice.reducer
