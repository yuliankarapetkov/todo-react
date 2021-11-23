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
                    map((data: any) => actions.getAuthStateSuccess(!!data)),
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
                    map(() => actions.signInSuccess()),
                    catchError(() => of(actions.signInFailure()))
                )
        )
    );

export const epics = [
    getAuthState$,
    signIn$,
];
