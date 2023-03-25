import { configureStore } from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { portafolioSlice } from "./Slice";

const store = configureStore({
    reducer:{
        portafolio:portafolioSlice.reducer
    }
});



export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;

export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

export default store;