import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../store/tasks-actions';
import styles from './Tasks.module.css';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks.list);
    const loading = useSelector((state: any) => state.tasks.loading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    const onCreate = (description: string) => {
        console.log('created', description);
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
                            key={task.key}
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
