import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from '../slices/auth-slice';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap, take } from 'rxjs/operators';
import * as authClient from '../../clients/auth-client';

export type AuthEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

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

export const epics = [
    getAuthState$,
    signIn$,
    signOut$,
];
