import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from './tasks-slice';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';

const { getTasks, getTasksSuccess, getTasksFailure } = actions;

export type TaskEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

const MOCK_TASKS: any[] = [
    {
        description: 'Do something',
        isCompleted: false,
        key: 'v1'
    },
    {
        description: 'Do something else',
        isCompleted: false,
        key: 'v2'
    },
    {
        description: 'Do another thing',
        isCompleted: false,
        key: 'v3'
    },
  ];

const fetchData = async (): Promise<any[]> => {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve(MOCK_TASKS)
        }, 2000);
    });
};

export const getTasks$: TaskEpic = action$ => 
    action$.pipe(
        filter(getTasks.match),
        mergeMap((action) =>
            from(fetchData())
                .pipe(
                    map((data: any[]) => getTasksSuccess(data)),
                    catchError(() => of(getTasksFailure()))
                )
        )
    );
