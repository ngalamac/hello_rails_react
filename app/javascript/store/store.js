import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingsSlice'; 

// Configure the Redux store
const store = configureStore({
  reducer: {
    greetings: greetingsReducer, 
  },
});

// Export the configured store
export default store;
