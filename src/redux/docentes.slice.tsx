import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDocentes } from "../services/Models/docentes.models";


interface AllDocentes{
    docentes:IDocentes[]
}

const initialState : AllDocentes = {
    docentes:[]
}



export const allDocentesSlice = createSlice({
    name : 'alldocentes',
    initialState,
    reducers:{
        readAllDocentes: (state, action:PayloadAction<IDocentes[]>)=>{
            state.docentes = action.payload;
        }
    }
});




export const {readAllDocentes} = allDocentesSlice.actions;
export default allDocentesSlice.reducer;
