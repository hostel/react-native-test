import { createReducer } from '@reduxjs/toolkit';

import { addToFavoriteAction, removeFromFavoriteAction } from './actions';

const INITIAL_STATE = {
  items: [],
};

export const favorites = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addToFavoriteAction, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(removeFromFavoriteAction, (state, { payload }) => {
      state.items = state.items.filter(
        ({ artistId, collectionId, trackId }) =>
          artistId !== payload.trackId &&
          collectionId !== payload.collectionId &&
          trackId !== payload.trackId
      );
    });
});
