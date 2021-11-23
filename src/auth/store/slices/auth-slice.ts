import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/auth-reducers';

import { AuthState } from '../AuthState';

const initialState: AuthState = {
  isAuthenticated: false,

  getAuthStateLoading: false,
  getAuthStateLoaded: false,
  signInLoading: false,
  signOutLoading: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const { actions } = slice;
