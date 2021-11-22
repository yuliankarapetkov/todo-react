import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { configureStore,  } from '@reduxjs/toolkit';
import tasksSlice from '../../tasks/store/tasks-slice';

import { epics as tasksEpics } from '../../tasks/store/tasks-epics';

const epics = combineEpics(
    ...tasksEpics,
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: { 
        tasks: tasksSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(epics);

export default store;
