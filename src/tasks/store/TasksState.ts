import { Task } from '../models';

export interface TasksState {
    list: Task[];
    loaded: boolean;

    getTasksLoading: boolean;
    createTaskLoading: boolean;
    updateTaskLoading: boolean;
    removeTaskLoading: boolean;
}
