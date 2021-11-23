import { AuthState } from "../AuthState";

export const reducers = {
    // Get Auth State
    getAuthState(state: AuthState): AuthState {
        return {
            ...state,
            getAuthStateLoading: true,
        }
    },
    getAuthStateSuccess(state: AuthState, action: { payload: string | null }): AuthState {
        const userId = action.payload;
        const isAuthenticated = !!userId;

        return {
            ...state,
            userId,
            isAuthenticated,
            getAuthStateLoading: false,
            getAuthStateLoaded: true,
        };
    },
    getAuthStateFailure(state: AuthState): AuthState {
        return {
            ...state,
            getAuthStateLoading: false,
            getAuthStateLoaded: false,
        }
    },

    // Sign In
    signIn(state: AuthState): AuthState {
        return {
            ...state,
            signInLoading: true,
        }
    },
    signInSuccess(state: AuthState, action: { payload: string | null }): AuthState {
        const userId = action.payload;
        const isAuthenticated = !!userId;

        return {
            ...state,
            userId,
            isAuthenticated,
            signInLoading: false,
        };
    },
    signInFailure(state: AuthState): AuthState {
        return {
            ...state,
            signInLoading: false,
        }
    },

    // Sign Out
    signOut(state: AuthState): AuthState {
        return {
            ...state,
            signOutLoading: true,
        }
    },
    signOutSuccess(state: AuthState): AuthState {
        return {
            ...state,
            userId: null,
            isAuthenticated: false,
            signOutLoading: false,
        };
    },
    signOutFailure(state: AuthState): AuthState {
        return {
            ...state,
            signOutLoading: false,
        }
    },
};
