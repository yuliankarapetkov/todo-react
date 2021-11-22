import { AnyAction } from '@reduxjs/toolkit';
import { Epic } from 'redux-observable';
import { actions } from './tasks-slice';
import { from, of } from 'rxjs';
import { filter, catchError, map, mergeMap } from 'rxjs/operators';
import { firestore } from '../../core/firebase';

const { getTasks, getTasksSuccess, getTasksFailure } = actions;

export type TaskEpic = Epic<AnyAction, AnyAction, ReturnType<any>>;

const fetchData = async (): Promise<any[]> => {
    const snapshot = await firestore.collection('tasks').get();
    const data = snapshot.docs.map(doc => doc.data());

    return data;
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
