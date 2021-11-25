import { PayloadAction } from '@reduxjs/toolkit';
import { Toast } from '../../models';
import { AppState } from '../AppState';

export const reducers = {
    // Show Toast
    showToast(state: AppState, action: PayloadAction<Toast>): AppState {
        const toast = action.payload;

        return {
            ...state,
            toasts: [
                ...state.toasts,
                toast
            ]
        };
    },

    // Hide Toast
    hideToast(state: AppState, action: PayloadAction<string>): AppState {
        return {
            ...state,
            toasts: state.toasts.filter(toast => toast.id !== action.payload)
        };
    },
};
