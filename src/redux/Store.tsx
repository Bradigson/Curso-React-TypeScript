import {configureStore} from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import  { allStudentsSlice } from './AllStudentsSlice';
import { allDocentesSlice } from './docentes.slice';
import { allMateriaSlice } from './materias.slice';
const store = configureStore({
    reducer:{
        allstudent: allStudentsSlice.reducer,
        alldocentes : allDocentesSlice.reducer,
        allmaterias : allMateriaSlice.reducer
    }
})

export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export default store;