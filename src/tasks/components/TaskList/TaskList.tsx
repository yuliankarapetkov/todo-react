import { Button } from '../../../app/components';
import { Task } from '..';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './TaskList.module.css';
import { createRef, useEffect } from 'react';
import { actions, selectGetTasksLoading, selectGetTasksStatus, selectRemoveTaskLoading, selectTasks, selectUpdateTaskLoading } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const TaskList: React.FC = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectTasks);
    const getTasksLoading = useSelector(selectGetTasksLoading);
    const getTasksStatus = useSelector(selectGetTasksStatus);
    const updateTaskLoading = useSelector(selectUpdateTaskLoading);
    const removeTaskLoading = useSelector(selectRemoveTaskLoading);

    const getTasks = () => dispatch(actions.getTasks());
    const onUpdate = (task: any) => dispatch(actions.updateTask(task));
    const onRemove = (task: any) => dispatch(actions.removeTask(task.id));

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="container">
            <div  className={styles.list}>
                {getTasksLoading &&
                    <div className={styles.loading}>
                        <i className="fa fa-spinner fa-spin"></i>
                        Loading your tasks..
                    </div>
                }

                {!getTasksLoading && getTasksStatus === 'failure' &&
                    <div className={styles.failure}>
                        <p className={styles.text}>
                            Oops! We couldn't fetch your tasks. Please, try again!
                        </p>

                        <Button icon="fa fa-refresh" variant="circular" onClick={getTasks} />
                    </div>
                }

                {!getTasksLoading && getTasksStatus === 'success' && !tasks.length &&
                    <div className={styles.empty}>
                        No tasks here. You are either a great doer, or a great procrastinator.
                    </div>
                }

                {!getTasksLoading && getTasksStatus === 'success' && 
                    <TransitionGroup>
                        {tasks.map((task: any) => {
                            const ref = createRef<HTMLDivElement>();

                            return (
                                <CSSTransition
                                    classNames={{
                                        enter: styles['task-enter'],
                                        enterActive: styles['task-enter-active'],
                                        exit: styles['task-exit'],
                                        exitActive: styles['task-exit-active'],
                                    }}
                                    timeout={300}
                                    key={task.id || task.description}
                                    nodeRef={ref}
                                >
                                    <div ref={ref}>
                                        <Task
                                            task={task}
                                            updateLoading={updateTaskLoading[task.id]}
                                            removeLoading={removeTaskLoading[task.id]}
                                            onUpdate={onUpdate}
                                            onRemove={() => onRemove(task)}
                                        />
                                    </div>
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                }
            </div>
        </div>
    );
}

export default TaskList;
