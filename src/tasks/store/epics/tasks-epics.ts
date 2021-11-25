import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from '../slices/tasks-slice';
import { actions as appActions } from '../../../app/store/slices';
import { createToast } from '../../../app/utils/toasts';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import * as tasksClient from '../../clients/tasks-client';

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

// Create Task
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

export const createTaskFailure$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.createTaskFailure.match),
        map(() => {
            const toast = createToast('Oops! We couldn\'t create this task. Please, try again later!', 'error');
            return appActions.showToast(toast);
        })
    );

// Update Task
export const updateTask$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.updateTask.match),
        mergeMap(({ payload: { id, description, isCompleted } }) =>
            from(tasksClient.updateTask(id, { description, isCompleted }))
                .pipe(
                    map(() => actions.updateTaskSuccess({ id, description, isCompleted })),
                    catchError(() => of(actions.updateTaskFailure(id)))
                )
        )
    );

export const updateTaskFailure$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.updateTaskFailure.match),
        map(() => {
            const toast = createToast('Oops! We couldn\'t update this task. Please, try again later!', 'error');
            return appActions.showToast(toast);
        })
    );

// Remove Task
export const removeTask$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.removeTask.match),
        mergeMap(({ payload: id }) =>
            from(tasksClient.removeTask(id))
                .pipe(
                    map(() => actions.removeTaskSuccess(id)),
                    catchError(() => of(actions.removeTaskFailure(id)))
                )
        )
    );

export const removeTaskFailure$: TaskEpic = action$ => 
    action$.pipe(
        filter(actions.removeTaskFailure.match),
        map(() => {
            const toast = createToast('Oops! We couldn\'t remove this task. Please, try again later!', 'error');
            return appActions.showToast(toast);
        })
    );

export const epics = [
    getTasks$,
    createTask$,
    createTaskFailure$,
    updateTask$,
    updateTaskFailure$,
    removeTask$,
    removeTaskFailure$
];
