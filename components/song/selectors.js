import { createSelector } from '@reduxjs/toolkit';

import { getFavorites } from '../favorites/selectors';

const getSongStore = (state) => state.list;

export const getItems = createSelector(
  getSongStore,
  getFavorites,
  ({ items }, favorites) => {
    const favoritesMap = favorites.reduce((acc, item) => {
      acc = {
        ...acc,
        [`${item.artistId}_${item.collectionId}_${item.trackId}`]: true,
      };

      return acc;
    }, {});

    return items.map((item) => ({
      ...item,
      isInFavorites:
        favoritesMap[`${item.artistId}_${item.collectionId}_${item.trackId}`] ||
        false,
    }));
  }
);

export const getSelectedSong = createSelector(
  getItems,
  (_, songData) => songData,
  (items, { artistId, collectionId, trackId }) =>
    items.find(
      (item) =>
        item.artistId === artistId &&
        item.collectionId === collectionId &&
        item.trackId === trackId
    )
);

export const getIsLoading = createSelector(
  getSongStore,
  ({ isLoading }) => isLoading
);

export const getCount = createSelector(getSongStore, ({ count }) => count);
