import { Task } from '../models';

export interface TasksState {
    list: Task[];
    loaded: boolean;

    getTasksLoading: boolean;
    createTaskLoading: boolean;
    updateTaskLoading: { [key: string]: boolean; };
    removeTaskLoading: { [key: string]: boolean; };
}
