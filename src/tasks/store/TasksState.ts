export interface TasksState {
    list: any[];
    loaded: boolean;

    getTasksLoading: boolean;
    createTaskLoading: boolean;
    updateTaskLoading: boolean;
}
