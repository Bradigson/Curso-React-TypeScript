import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudentsSchema } from "../services/Models/models";



interface AllStudents{
    students:IStudentsSchema[]
}

const initialState : AllStudents = {
    students:[]
}



export const allStudentsSlice = createSlice({
    name : 'allstudents',
    initialState,
    reducers:{
        readAllStudents: (state, action:PayloadAction<IStudentsSchema[]>)=>{
            state.students = action.payload;
        }
    }
});




export const {readAllStudents} = allStudentsSlice.actions;
export default allStudentsSlice.reducer;
