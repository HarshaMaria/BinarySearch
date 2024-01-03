import { configureStore } from '@reduxjs/toolkit';
import binarySearchSlice from './reducers/binarySearchSlice';

export const store = configureStore({
  reducer: {
    binary:binarySearchSlice
  },
})