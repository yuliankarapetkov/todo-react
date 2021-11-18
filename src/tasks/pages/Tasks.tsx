import './Tasks.css';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../store/tasks-actions';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks.list);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    const onUpdate = (task: any) => {
        console.log('updated', task);
    };

    const onRemove = (task: any) => {
        console.log('removed', task);
    };

    return (
        <div>
            <div className="header">
                <div className="container">
                    <TaskForm />
                </div>
            </div>

            <div className="content container">
                <div  className="list">
                    {tasks && tasks.map((task: any) => (
                        <Task
                            task={task}
                            key={task.key}
                            onUpdate={onUpdate}
                            onRemove={() => onRemove(task)}
                        />
                    ))}
                    {/* <div *ngIf="todos$ | async as todos; else loading">
                        <div *ngIf="todos.length">
                            <todos-todo-item
                                *ngFor="let item of todos$ | async"
                                [item]="item"
                                (remove)="onRemoveTodo($event)"
                                (update)="onUpdateTodo($event)">
                            </todos-todo-item>
                        </div>

                        <div *ngIf="!todos.length" class="todos-list__empty">
                            <p>
                                No tasks here. You are either a great doer, or a great procrastinator.
                            </p>
                        </div>
                    </div> */}

                    {/* <ng-template #loading>
                        <div class="todos-list__loading">
                            <i class="fa fa-spinner fa-spin"></i>
                            Loading your tasks..
                        </div>
                    </ng-template> */}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
