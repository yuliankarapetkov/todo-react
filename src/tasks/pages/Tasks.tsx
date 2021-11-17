function Tasks() {
  return (
    <div>
        <div className="header">
            
        </div>

        <div className="content container">
            <div  className="list">
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
