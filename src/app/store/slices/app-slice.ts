import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/app-reducers';

import { AppState } from '../AppState';

const initialState: AppState = {
    toasts: [{
      id: '1',
      message: 'Successfully logged in',
      type: 'success'
    }, {
      id: '2',
      message: 'proba proba',
      type: 'error'
    }]
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const { actions } = slice;
