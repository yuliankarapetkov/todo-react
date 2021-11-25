import { Task } from '../models';

export interface TasksState {
    list: Task[];
    getTasksStatus: 'success' | 'failure' | null;

    getTasksLoading: boolean;
    createTaskLoading: boolean;
    updateTaskLoading: { [key: string]: boolean; };
    removeTaskLoading: { [key: string]: boolean; };
}
