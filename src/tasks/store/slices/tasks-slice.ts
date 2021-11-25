import { createSlice } from '@reduxjs/toolkit';
import { reducers } from '../reducers/tasks-reducers';

import { TasksState } from '../TasksState';

const initialState: TasksState = {
    list: [],

    getTasksStatus: null,

    getTasksLoading: false,
    createTaskLoading: false,
    updateTaskLoading: {},
    removeTaskLoading: {},
};

export const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers,
});

export const { actions } = slice;
