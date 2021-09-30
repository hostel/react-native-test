import { createSelector } from '@reduxjs/toolkit';

export const getFavoritesStore = (state) => state.favorites;

export const getFavorites = createSelector(getFavoritesStore, ({ items }) =>
  items.map((item) => ({ ...item, isInFavorites: true }))
);
