import { TasksState } from "./TasksState";

export const reducers = {
    // Get Tasks
    getTasks(state: TasksState) {
        return {
            ...state,
            loading: true
        }
    },
    getTasksSuccess(state: TasksState, action: { payload: any[]; }) {
        const list = action.payload;

        return {
            ...state,
            loading: false,
            loaded: true,
            list
        };
    },
    getTasksFailure(state: TasksState) {
        return {
            ...state,
            loading: false,
            loaded: false,
        }
    },
    
    // Create Task
    createTask(state: TasksState, action: { payload: any; }) {
        return {
            ...state,
            createTaskLoading: true
        }
    },
    createTaskSuccess(state: TasksState, action: { payload: any; }) {
        const task = action.payload;

        return {
            ...state,
            createTaskLoading: false,
            list: [
                task,
                ...state.list
            ]
        };
    },
    createTaskFailure(state: TasksState) {
        return {
            ...state,
            createTaskLoading: false,
        }
    },
};
