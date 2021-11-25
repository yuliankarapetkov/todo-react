import { RootState } from '../../../app/store';
import { TasksState } from '../TasksState';
import { createSelector } from '@reduxjs/toolkit';

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = createSelector(selectTasksState, (state: TasksState) => state.list);
export const selectLoaded = createSelector(selectTasksState, (state: TasksState) => state.loaded);

export const selectGetTasksLoading = createSelector(selectTasksState, (state: TasksState) => state.getTasksLoading);
export const selectCreateTaskLoading = createSelector(selectTasksState, (state: TasksState) => state.createTaskLoading);
export const selectUpdateTaskLoading = createSelector(selectTasksState, (state: TasksState) => state.updateTaskLoading);
export const selectRemoveTaskLoading = createSelector(selectTasksState, (state: TasksState) => state.removeTaskLoading);
