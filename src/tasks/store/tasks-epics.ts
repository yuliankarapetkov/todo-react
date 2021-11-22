import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from './tasks-slice';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import * as tasksClient from '../clients/tasks-client';

const { getTasks, getTasksSuccess, getTasksFailure } = actions;

export type TaskEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

export const getTasks$: TaskEpic = action$ => 
    action$.pipe(
        filter(getTasks.match),
        mergeMap((action) =>
            from(tasksClient.getTasks())
                .pipe(
                    map((data: any[]) => getTasksSuccess(data)),
                    catchError(() => of(getTasksFailure()))
                )
        )
    );
