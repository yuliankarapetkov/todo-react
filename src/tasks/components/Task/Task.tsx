import { Task as TaskModel } from '../../models';
import { useState } from 'react';
import styles from './Task.module.css';

interface Props {
    task: TaskModel;
    onUpdate: (task: TaskModel) => void;
    onRemove: () => void;
}

const Task: React.FC<Props> = ({ task, onUpdate, onRemove }) => {
    const [description, setDescription] = useState(task.description);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);
    const [isEditing, setIsEditing] = useState(false);

    const inputChange = (e: any) => setDescription(e.target.value);
    const toggleIsEditing = () => setIsEditing(oldValue => !oldValue);

    const toggleIsCompleted = () => {
        setIsCompleted((oldValue: boolean) => !oldValue);

        const clone: TaskModel = {
            ...task,
            isCompleted: !isCompleted
        };

        onUpdate(clone);
    };

    const submit = (e: any) => {
        e.preventDefault();

        setIsEditing(false);

        const clone: TaskModel = {
            ...task,
            description
        };

        onUpdate(clone);
    };

    return (
        <>
            {isEditing &&
                <div className={styles.task}>
                    <div className={styles.col}>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.description}>
                            <form onSubmit={submit}>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={description}
                                    onChange={inputChange}
                                />
                            </form>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <button className={styles.button} type="button" onClick={toggleIsEditing}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            }

            {!isEditing &&
                <div className={styles.task}>
                    <div className={styles.col}>
                        <button className={[styles.button, task.isCompleted ? styles.active : ''].join(' ')} type="button" onClick={toggleIsCompleted}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.description}>
                            {description}
                        </div>
                    </div>

                    <div className={styles.col}>
                        <button className={styles.button} type="button" onClick={onRemove}>
                            <i className="fas fa-trash"></i>
                        </button>

                        <button className={styles.button} type="button" onClick={toggleIsEditing}>
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Task;
