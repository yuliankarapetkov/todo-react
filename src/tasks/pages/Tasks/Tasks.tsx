import { Task, TaskForm } from '../../components';
import { actions } from '../../store/tasks-slice';
import styles from './Tasks.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks.list);
    const loading = useSelector((state: any) => state.tasks.getTasksLoading);

    useEffect(() => {
        dispatch(actions.getTasks());
    }, []);

    const onCreate = (description: string) => {
        console.log('created', description);

        const task = {
            description,
            isCompleted: false,
            id: Date.now()
        };

        dispatch(actions.createTask(task));
    };

    const onUpdate = (task: any) => {
        console.log('updated', task);
    };

    const onRemove = (task: any) => {
        console.log('removed', task);
    };

    return (
        <div>
            <div className={styles.header}>
                <div className="container">
                    <TaskForm onCreate={onCreate} />
                </div>
            </div>

            <div className={[styles.content, 'container'].join(' ')}>
                <div  className={styles.list}>
                    {loading &&
                         <div className={styles.loading}>
                            <i className="fa fa-spinner fa-spin"></i>
                            Loading your tasks..
                        </div>
                    }

                    {!loading && !tasks.length &&
                        <div className={styles.empty}>
                            No tasks here. You are either a great doer, or a great procrastinator.
                        </div>
                    }

                    {!loading && tasks.map((task: any) => (
                        <Task
                            task={task}
                            key={task.id}
                            onUpdate={onUpdate}
                            onRemove={() => onRemove(task)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
