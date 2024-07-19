import { configureStore } from "@reduxjs/toolkit";

import reducer from '../utils/userSlice' ;
import moviesReducer from './movieSlice' ;
import gptReducer from './gptSlice'
import configReducer from './configSlice'
const appStore = configureStore({
    reducer :{

        user:reducer ,
        movies:moviesReducer,
        gpt:gptReducer , 
        config:configReducer
    }
});

export default appStore;
