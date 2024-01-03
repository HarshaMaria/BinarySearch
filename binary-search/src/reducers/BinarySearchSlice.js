import { createSlice } from "@reduxjs/toolkit";
const initialState={
    array:[],
    target:0,
    result:-1,
    left:0,
    right:0
}

export const binarySearchSlice=createSlice({
    name:'binary',
    initialState,
    reducers:{
    setInputArray: (state,action)=>{
        state.array=action.payload;
    },
    settarget:(state,action)=>{
        state.target=action.payload;
    },
    setresult:(state,action)=>{
        state.result=action.payload;
    },
    setleft:(state,action)=>{
        state.left=action.payload;
    },
    setright:(state,action)=>{
        state.right=action.payload;
    }
    }
})
export const {setInputArray,settarget,setresult,setleft,setright}=binarySearchSlice.actions;
export default binarySearchSlice.reducer;