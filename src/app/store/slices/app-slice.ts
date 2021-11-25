import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/app-reducers';

import { AppState } from '../AppState';

const initialState: AppState = {
    toasts: []
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const { actions } = slice;
