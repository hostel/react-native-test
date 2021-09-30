import { createAction } from '@reduxjs/toolkit';

export const addToFavoriteAction = createAction('favorites/add');

export const removeFromFavoriteAction = createAction('favorites/remove');
