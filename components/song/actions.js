import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { API_URL } from '../../constants';
import { getParamsAsString } from '../../utils/getParamsAsString';

export const fetchSongsAction = createAction('list/fetchList');

export const fetchSongsThunk = createAsyncThunk(
  fetchSongsAction,
  async (params) => {
    const url = `${API_URL}${getParamsAsString(params)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
);
