import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './tasks-reducers';

import { TasksState } from './TasksState';

export const initialState: TasksState = {
    list: [],
    loaded: false,

    getTasksLoading: false,
    createTaskLoading: false,
    updateTaskLoading: false,
    removeTaskLoading: false
};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers,
});

export const { actions } = slice;

export default slice;
