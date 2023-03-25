import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IPortafolio, IPortafolioType } from '../services/Models';



interface PortafolioState{
    portafolio:IPortafolio[];
}

const initialState : PortafolioState = {
    portafolio : []
}



export const portafolioSlice = createSlice({
    name : 'portafolio',
    initialState,
    reducers:{
        insertPortafolioData: (state, action:PayloadAction<IPortafolioType[]>)=>{
            state.portafolio = action.payload;
        }
    }
})

export const {insertPortafolioData} = portafolioSlice.actions;
export default portafolioSlice.reducer;