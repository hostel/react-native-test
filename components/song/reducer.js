import { createReducer } from '@reduxjs/toolkit';

import { fetchSongsThunk } from './actions';

const INITIAL_STATE = {
  count: 0,
  items: [],
  error: '',
  isLoading: false,
};

export const list = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(fetchSongsThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchSongsThunk.fulfilled, (state, action) => {
      state.count = action.payload.resultCount;
      state.items = action.payload.results;
      state.isLoading = false;
    })
    .addCase(fetchSongsThunk.rejected, (state) => {
      state.error = 'error';
      state.isLoading = false;
    });
});
