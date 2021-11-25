import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from '../slices/app-slice';
import { delay, filter, map } from 'rxjs/operators';

export type AppEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

const DELAY = 3000;

export const showToast$: AppEpic = action$ => 
    action$.pipe(
        filter(actions.showToast.match),
        delay(DELAY),
        map(({ payload: toast }) => actions.hideToast(toast.id)),
    );

export const epics = [
    showToast$,
];
