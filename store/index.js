import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { list } from '../components/song/reducer';
import { favorites } from '../components/favorites/reducer';

const rootReducer = combineReducers({
  list,
  favorites,
});

export const store = configureStore({ reducer: rootReducer });
