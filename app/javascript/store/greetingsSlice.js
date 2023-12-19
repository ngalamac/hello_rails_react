import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  greeting: '',
  loading: 'inProgress',
  error: null,
};

// Async thunk for fetching greetings
export const fetchRandomGreeting = createAsyncThunk(
  'greetings/fetchRandomGreeting',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/greetings/random_message');
      return response.data.greeting;
    } catch (error) {
      throw new Error('Failed to fetch greeting');
    }
  }
);

// Create slice with reducers and extraReducers
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.loading = 'completed';
        state.greeting = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default greetingsSlice.reducer;
