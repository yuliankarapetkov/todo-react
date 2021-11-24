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
            loaded: true,
            list
        };
    },
    getTasksFailure(state: TasksState): TasksState {
        return {
            ...state,
            getTasksLoading: false,
            loaded: false,
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
    updateTask(state: TasksState, action: PayloadAction<UpdateTaskPayload>): TasksState {
        return {
            ...state,
            updateTaskLoading: true
        }
    },
    updateTaskSuccess(state: TasksState, action: PayloadAction<UpdateTaskPayload>): TasksState {
        const task = action.payload;

        return {
            ...state,
            updateTaskLoading: false,
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
    updateTaskFailure(state: TasksState): TasksState {
        return {
            ...state,
            updateTaskLoading: false,
        }
    },

    // Remove Task
    removeTask(state: TasksState, action: PayloadAction<string>): TasksState {
        return {
            ...state,
            removeTaskLoading: true
        }
    },
    removeTaskSuccess(state: TasksState, action: PayloadAction<string>): TasksState {
        const id = action.payload;

        return {
            ...state,
            removeTaskLoading: false,
            list: state.list.filter(t => t.id !== id)
        };
    },
    removeTaskFailure(state: TasksState): TasksState {
        return {
            ...state,
            removeTaskLoading: false,
        }
    },
};
