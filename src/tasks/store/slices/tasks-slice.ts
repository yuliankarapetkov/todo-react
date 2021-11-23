import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/tasks-reducers';

import { TasksState } from '../TasksState';

const initialState: TasksState = {
    list: [],
    loaded: false,

    getTasksLoading: false,
    createTaskLoading: false,
    updateTaskLoading: false,
    removeTaskLoading: false
};

export const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers,
});

export const { actions } = slice;
