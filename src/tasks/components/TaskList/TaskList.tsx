
import { Task } from '..';
import styles from './TaskList.module.css';
import { useEffect } from 'react';
import { actions, selectGetTasksLoading, selectRemoveTaskLoading, selectTasks, selectUpdateTaskLoading } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectTasks);
    const loading = useSelector(selectGetTasksLoading);

    const updateTaskLoading = useSelector(selectUpdateTaskLoading);
    const removeTaskLoading = useSelector(selectRemoveTaskLoading);

    const onUpdate = (task: any) => dispatch(actions.updateTask(task));
    const onRemove = (task: any) => dispatch(actions.removeTask(task.id));

    useEffect(() => {
        dispatch(actions.getTasks());
    }, [dispatch]);

    return (
        <div className="container">
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
                        updateLoading={updateTaskLoading[task.id]}
                        removeLoading={removeTaskLoading[task.id]}
                        key={task.id || task.description}
                        onUpdate={onUpdate}
                        onRemove={() => onRemove(task)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
