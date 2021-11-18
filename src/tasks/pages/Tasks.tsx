import './Tasks.css';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../store/tasks-actions';

function Tasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.tasks.list);
    const loading = useSelector((state: any) => state.tasks.loading);

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
                    {loading &&
                         <div className="list__loading">
                            <i className="fa fa-spinner fa-spin"></i>
                            Loading your tasks..
                        </div>
                    }

                    {!loading && !tasks.length &&
                        <div className="list__empty">
                            <p>
                                No tasks here. You are either a great doer, or a great procrastinator.
                            </p>
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
