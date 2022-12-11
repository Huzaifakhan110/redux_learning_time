import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0,
}

export const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,//initialState-> shorthand  notation,
    reducers:{
        increment: (state)=>{
            state.counter+=1;
            
        },
        decrement: (state)=>{
            state.counter-=1;
        },
        changeByAmount : (state,action)=>{
            state.counter += action.payload
        }

    }
})

export const {increment, decrement,changeByAmount} =  counterSlice.actions

export default counterSlice.reducer

