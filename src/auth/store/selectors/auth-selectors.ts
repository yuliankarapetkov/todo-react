import { AuthState } from "../AuthState";
import { RootState } from "../../../app/store";
import { createSelector } from "@reduxjs/toolkit";

const selectAuthState = (state: RootState) => state.auth;

export const selectUserId = createSelector(selectAuthState, (state: AuthState) => state.userId);
export const selectIsAuthenticated = createSelector(selectAuthState, (state: AuthState) => state.isAuthenticated);
export const selectGetAuthStateLoading = createSelector(selectAuthState, (state: AuthState) => state.getAuthStateLoading);
export const selectGetAuthStateLoaded = createSelector(selectAuthState, (state: AuthState) => state.getAuthStateLoaded);
export const selectSignInLoading = createSelector(selectAuthState, (state: AuthState) => state.signInLoading);
export const selectSignOutLoading = createSelector(selectAuthState, (state: AuthState) => state.signOutLoading);
