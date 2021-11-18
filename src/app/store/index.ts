import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../../tasks/store/tasks-slice';

const store = configureStore({
    reducer: { 
        tasks: tasksSlice.reducer
    },
});

export default store;
