import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const axios = require('axios')
export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async ()=>{
    try {
        const response = await axios.get('/api/v1/random_message');
        return response.data.message
      } catch (error) {
        console.error(error);
      }
})

const initialState = {
    data: '',
    loading: false,
    error: null
}
const greetingSlice = createSlice({
    name:"api",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchGreeting.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchGreeting.fulfilled, (state,action)=>{
            state.data = action.payload
            state.loading = false
        })
        builder.addCase(fetchGreeting.rejected, (state, action)=>{
            state.error = action.error.message
        })
    }
})

export default greetingSlice.reducer;