import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from '../slices/auth-slice';
import { actions as appActions } from '../../../app/store/slices';
import * as authClient from '../../clients/auth-client';
import { createToast } from '../../../app/utils/toasts';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap, take } from 'rxjs/operators';

export type AuthEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

// Get Auth State
export const getAuthState$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.getAuthState.match),
        mergeMap(() =>
            from(authClient.onAuthStateChanged())
                .pipe(
                    take(1),
                    map((userId: string | null) => actions.getAuthStateSuccess(userId)),
                    catchError(() => of(actions.getAuthStateFailure()))
                )
        )
    );

export const getAuthStateSuccess$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.getAuthStateSuccess.match),
        filter(({ payload: userId }) => !!userId),
        map(() => {
            const toast = createToast('Welcome back!');
            return appActions.showToast(toast);
        })
    );

// Sign In
export const signIn$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signIn.match),
        mergeMap(() =>
            from(authClient.signIn())
                .pipe(
                    map((userId: string | null) => actions.signInSuccess(userId)),
                    catchError(() => of(actions.signInFailure()))
                )
        )
    );

export const signInSuccess$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signInSuccess.match),
        map(() => {
            const toast = createToast('Signed in successfully!');
            return appActions.showToast(toast);
        })
    );

export const signInFailure$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signInFailure.match),
        map(() => {
            const toast = createToast('Oops! We couldn\'t sign you in. Please, try again later!', 'error');
            return appActions.showToast(toast);
        })
    );

// Sign Out
export const signOut$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signOut.match),
        mergeMap(() =>
            from(authClient.signOut())
                .pipe(
                    map(() => actions.signOutSuccess()),
                    catchError(() => of(actions.signOutFailure()))
                )
        )
    );

export const signOutSuccess$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signOutSuccess.match),
        map(() => {
            const toast = createToast('Signed out successfully!');
            return appActions.showToast(toast);
        })
    );

export const signOutFailure$: AuthEpic = action$ => 
    action$.pipe(
        filter(actions.signOutFailure.match),
        map(() => {
            const toast = createToast('Oops! We couldn\'t sign you out. Please, try again later!', 'error');
            return appActions.showToast(toast);
        })
    );

export const epics = [
    getAuthState$,
    getAuthStateSuccess$,
    signIn$,
    signInSuccess$,
    signInFailure$,
    signOut$,
    signOutSuccess$,
    signOutFailure$
];
