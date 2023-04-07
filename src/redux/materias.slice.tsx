import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IMateriaNombre{
    nombre:string
}

export interface IMaterias{
    status:number, 
    response:Array<IMateriaNombre>
}

const initialState:IMaterias = {
    status:0,
    response:[]
}

type MateriaType = {
    status:number, 
    response:Array<IMateriaNombre>
}

            
            //este es el nombre que llamamos
export const allMateriaSlice = createSlice({
    name : "materias",
    initialState,
    reducers:{
        readAllMaterias: (state, action: PayloadAction<MateriaType >)=>{
            state.response = action.payload.response;
        }

    }
});


export const {readAllMaterias} = allMateriaSlice.actions;
 export default allMateriaSlice.reducer;