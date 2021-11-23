export interface AuthState {
    userId: string | null;
    isAuthenticated: boolean;

    getAuthStateLoading: boolean;
    getAuthStateLoaded: boolean;
    signInLoading: boolean;
    signOutLoading: boolean;
}
