import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { configureStore,  } from '@reduxjs/toolkit';
import { slice as authSlice, epics as authEpics } from '../../auth/store';
import { slice as tasksSlice, epics as tasksEpics } from '../../tasks/store';

const epics = combineEpics(
    ...authEpics,
    ...tasksEpics,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: { 
        auth: authSlice.reducer,
        tasks: tasksSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(epics);

export default store;
