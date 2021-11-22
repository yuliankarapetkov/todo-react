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
    createTask(state: TasksState, action: { payload: string; }) {
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

    // Update Task
    updateTask(state: TasksState, action: { payload: { id: string, description?: string; isCompleted?: boolean; }; }) {
        return {
            ...state,
            updateTaskLoading: true
        }
    },
    updateTaskSuccess(state: TasksState, action: { payload: { id: string, description?: string; isCompleted?: boolean; }; }) {
        const task = action.payload;

        return {
            ...state,
            updateTaskLoading: false,
            list: state.list.map(t => 
                t.id !== task.id 
                    ? t 
                    : { 
                        ...t,
                        description: task.description || t.description,
                        isCompleted: task.isCompleted !== null ? task.isCompleted : t.isCompleted
                    }
            )
        };
    },
    updateTaskFailure(state: TasksState) {
        return {
            ...state,
            updateTaskLoading: false,
        }
    },
};
