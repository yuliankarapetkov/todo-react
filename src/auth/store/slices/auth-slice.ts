import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/auth-reducers';

import { AuthState } from '../AuthState';

const initialState: AuthState = {
  userId: null,
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

export const authMiddleware = (setFunction: (userId: string | null) => void) => {
  return () => (next: any) => (action: any) => {
    const actionTypes = [
      actions.getAuthStateSuccess.type,
      actions.signInSuccess.type
    ];

    if (actionTypes.includes(action.type)) {
      const userId = action.payload;
      setFunction(userId);
    }

    return next(action);
  }
};
