import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './CounterSlice'
import postsReducer from './PostsSlice'
// 1=> create store file

const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts:postsReducer
    },
    devTools:true
})

export default store