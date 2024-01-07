// step 1:
import { configureStore } from '@reduxjs/toolkit';  // from core redux

import todoReducer from '../features/todo/todoSlice.js';

export const store = configureStore({
    reducer: todoReducer
});