import { RootState } from '../../../app/store';
import { actions } from '../../store';
import styles from './Tasks.module.css';
import { useEffect } from 'react';
import { Task, TaskForm } from '../../components';
import { useDispatch, useSelector } from 'react-redux';


const Tasks: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.list);
    const loading = useSelector((state: RootState) => state.tasks.getTasksLoading);

    useEffect(() => {
        dispatch(actions.getTasks());
    }, []);

    const onCreate = (description: string) => dispatch(actions.createTask(description));
    const onUpdate = (task: any) => dispatch(actions.updateTask(task));
    const onRemove = (task: any) => dispatch(actions.removeTask(task.id));

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
                            key={task.id || task.description}
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
