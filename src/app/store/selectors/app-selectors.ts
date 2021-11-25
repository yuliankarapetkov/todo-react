import { RootState } from '..';
import { AppState } from '../AppState';
import { createSelector } from '@reduxjs/toolkit';

const selectAppState = (state: RootState) => state.app;

export const selectToasts = createSelector(selectAppState, (state: AppState) => state.toasts);
