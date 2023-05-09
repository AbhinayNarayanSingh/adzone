import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    total : 0,
    products : [],
    limit : 30
}

// First, create the thunk
const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )

const productSlice = createSlice({
    name : "products",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.push(action.payload.products)
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default productSlice.reducer