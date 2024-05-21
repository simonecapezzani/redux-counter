import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import counterActions from './counter';
import authReducer from './auth';
import authActions from './auth';


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;