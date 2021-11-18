import { TasksState } from "./TasksState";

export const reducers = {
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
    
};
