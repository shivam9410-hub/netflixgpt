import { configureStore } from "@reduxjs/toolkit";
import { useDeferredValue, useReducer } from "react";
import reducer from '../utils/userSlice' ;
import moviesReducer from './movieSlice' ; 
const appStore = configureStore({
    reducer :{

        user:reducer ,
        movies:moviesReducer
    }
});

export default appStore;
