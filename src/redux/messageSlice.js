import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getMessages = createAsyncThunk("get/messages", async () => {
    try {
        const resp = await fetch("http://www.app.readychatai.com/data")
        const data = await resp.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    data: [],
    isLoading: false,
    error: null
}


export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getMessages.fulfilled, (state, action) =>{
                state.data = action.payload
                state.isLoading = false
                state.error = null
            }) 

            .addCase(getMessages.pending, (state, action) =>{
                state.isLoading = true
                state.error = null
            }) 

            .addCase(getMessages.rejected, (state, action) =>{
                state.isLoading = false
                state.error = action.payload
            }) 
    }
})


export default messageSlice.reducer