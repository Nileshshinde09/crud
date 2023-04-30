import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./store";
const initialState={
    client :{toggleForm:false, formid:undefined,deleteid:null}
}
export const ReducerSlice = createSlice({
    name:'crudapp',
    initialState,
    reducers:{
        toggleChangeAction :(state)=>{
            state.client.toggleForm = !state.client.toggleForm;
        },
        updateAction:(state,action)=>{
            state.client.formid = action.payload
        },
        deleteAction:(state,action)=>{
            state.client.deleteid= action.payload
        }
    }
})

export const {toggleChangeAction ,updateAction,deleteAction} = ReducerSlice.actions
export default ReducerSlice.reducer