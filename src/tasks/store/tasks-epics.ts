import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from './tasks-slice';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import * as tasksClient from '../clients/tasks-client';

export type TaskEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

export const getTasks$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.getTasks.match),
        mergeMap(() =>
            from(tasksClient.getTasks())
                .pipe(
                    map((data: any[]) => actions.getTasksSuccess(data)),
                    catchError(() => of(actions.getTasksFailure()))
                )
        )
    );

export const createTask$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.createTask.match),
        mergeMap(({ payload: description }) =>
            from(tasksClient.createTask(description))
                .pipe(
                    map((task: any) => actions.createTaskSuccess(task)),
                    catchError(() => of(actions.createTaskFailure()))
                )
        )
    );

export const epics = [
    getTasks$,
    createTask$,
];
