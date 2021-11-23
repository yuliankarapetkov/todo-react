export interface AuthState {
    isAuthenticated: boolean;

    getAuthStateLoading: boolean;
    getAuthStateLoaded: boolean;
    signInLoading: boolean;
    signOutLoading: boolean;
}
