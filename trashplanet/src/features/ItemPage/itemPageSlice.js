import { createSlice } from '@reduxjs/toolkit'

export const productSLice = createSlice({
    name: "product",
    initialState: {},
    reducers: {
        recieveProduct: (state, action) => {
            return action.payload
        }
    }
})

export const { recieveProduct } = productSLice.actions;
// export const currentProduct = 
export default productSLice.reducer