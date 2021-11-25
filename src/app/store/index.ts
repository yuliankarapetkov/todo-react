import { configureStore } from '@reduxjs/toolkit';
import { epics as appEpics } from './epics';
import { setUserId } from '../utils';
import { slice as appSlice } from './slices';
import { authMiddleware, slice as authSlice, epics as authEpics } from '../../auth/store';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { slice as tasksSlice, epics as tasksEpics } from '../../tasks/store';

const epics = combineEpics(
    ...appEpics,
    ...authEpics,
    ...tasksEpics,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: { 
        app: appSlice.reducer,
        auth: authSlice.reducer,
        tasks: tasksSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(epicMiddleware)
            .concat(authMiddleware(setUserId))
});

epicMiddleware.run(epics);

export type RootState = ReturnType<typeof store.getState>;

export default store;
