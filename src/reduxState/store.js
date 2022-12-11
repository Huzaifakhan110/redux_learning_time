import { configureStore } from "@reduxjs/toolkit";
import myCounterReducer from './reducer/counterReducer'

const store = configureStore({
    reducer:{
        counterValue : myCounterReducer,
    }
});


export default store;