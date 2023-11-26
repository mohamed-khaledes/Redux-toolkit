import { createSlice } from "@reduxjs/toolkit";

// 3- create slice

const initialState ={
    name:"mohamed",
    count:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        },
        incrementByAmount:(state,action)=>{
            state.count += action.payload
        },
        changeName:(state,action)=>{
            state.name = action.payload
        }
    }
})


export const {increment,decrement,incrementByAmount,changeName} = counterSlice.actions
export default counterSlice.reducer