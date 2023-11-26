import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    posts:[],
    loading:true,
    error:null
}
export const getAllPosts = createAsyncThunk("posts/getAll",async(url,thunkApi)=>{
    const {rejectWithValue} = thunkApi
    try{
        const response =await axios.get(url)
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
const PostsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{

    },
    extraReducers:{
    [getAllPosts.pending]:(state,action)=>{
       state.loading=true
       state.error=null
    },
    [getAllPosts.fulfilled]:(state,action)=>{
        state.posts = action.payload
        state.loading=false
        state.error=null
    },
    [getAllPosts.rejected]:(state,action)=>{
       state.loading=false
       state.error=action?.error?.message
        
    },
    }
})

export default PostsSlice.reducer