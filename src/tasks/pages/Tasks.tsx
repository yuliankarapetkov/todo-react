import Task from '../components/Task';
import TaskForm from '../components/TaskForm';

import './Tasks.css';

const TASKS = [
    {
        description: 'Do something',
        isCompleted: false,
        key: 'v1'
    },
    {
        description: 'Do something else',
        isCompleted: false,
        key: 'v2'
    },
    {
        description: 'Do another thing',
        isCompleted: false,
        key: 'v3'
    },
];

function Tasks() {
  return (
    <div>
        <div className="header">
            <TaskForm />
        </div>

        <div className="content container">
            <div  className="list">
                {TASKS.map(task => (
                    <Task task={task} />
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
