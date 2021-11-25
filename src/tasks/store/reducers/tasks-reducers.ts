import { PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../models';
import { TasksState } from '../TasksState';

interface UpdateTaskPayload {
    id: string;
    description?: string;
    isCompleted?: boolean;
}

export const reducers = {
    // Get Tasks
    getTasks(state: TasksState): TasksState {
        return {
            ...state,
            getTasksLoading: true
        };
    },
    getTasksSuccess(state: TasksState, action: PayloadAction<Task[]>): TasksState {
        const list = action.payload;

        return {
            ...state,
            getTasksLoading: false,
            getTasksStatus: 'success',
            list
        };
    },
    getTasksFailure(state: TasksState): TasksState {
        return {
            ...state,
            getTasksLoading: false,
            getTasksStatus: 'failure',
        }
    },
    
    // Create Task
    createTask(state: TasksState, action: PayloadAction<string>): TasksState {
        return {
            ...state,
            createTaskLoading: true
        }
    },
    createTaskSuccess(state: TasksState, action: PayloadAction<Task>): TasksState {
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
    createTaskFailure(state: TasksState): TasksState {
        return {
            ...state,
            createTaskLoading: false,
        }
    },

    // Update Task
    updateTask(state: TasksState, action: PayloadAction<UpdateTaskPayload>): TasksState | void {
        return {
            ...state,
            updateTaskLoading: {
                ...state.updateTaskLoading,
                [action.payload.id]: true
            }
        }
    },
    updateTaskSuccess(state: TasksState, action: PayloadAction<UpdateTaskPayload>): TasksState | void {
        const task = action.payload;

        return {
            ...state,
            updateTaskLoading: {
                ...state.updateTaskLoading,
                [action.payload.id]: false
            },
            list: state.list.map(t => 
                t.id !== task.id 
                    ? t 
                    : { 
                        ...t,
                        description: task.description ?? t.description,
                        isCompleted: task.isCompleted ?? t.isCompleted
                    }
            )
        };
    },
    updateTaskFailure(state: TasksState, action: PayloadAction<string>): TasksState {
        return {
            ...state,
            updateTaskLoading: {
                ...state.updateTaskLoading,
                [action.payload]: false
            },
        }
    },

    // Remove Task
    removeTask(state: TasksState, action: PayloadAction<string>): TasksState {
        return {
            ...state,
            removeTaskLoading: {
                ...state.removeTaskLoading,
                [action.payload]: true
            },
        }
    },
    removeTaskSuccess(state: TasksState, action: PayloadAction<string>): TasksState {
        const id = action.payload;

        return {
            ...state,
            removeTaskLoading: {
                ...state.removeTaskLoading,
                [action.payload]: false
            },
            list: state.list.filter(t => t.id !== id)
        };
    },
    removeTaskFailure(state: TasksState, action: PayloadAction<string>): TasksState {
        return {
            ...state,
            removeTaskLoading: {
                ...state.removeTaskLoading,
                [action.payload]: false
            },
        }
    },
};
