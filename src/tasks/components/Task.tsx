import { useState } from 'react';
import styles from './Task.module.css';

function Task({ task, onUpdate, onRemove }: { task: any; onUpdate: (task: any) => void; onRemove: () => void; }) {
    const [isEditing, setIsEditing] = useState(false);

    const toggleIsEditing = () => setIsEditing(oldValue => !oldValue);

    const toggleIsCompleted = () => {
        const clone = {
            ...task,
            isCompleted: !task.isCompleted
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
                            <form>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={task.description}
                                />
                            </form>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <button type="button" onClick={toggleIsEditing}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            }

            {!isEditing &&
                <div className={styles.task}>
                    <div className={styles.col}>
                        <button type="button" onClick={toggleIsCompleted}>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.description}>
                            {task.description}
                        </div>
                    </div>

                    <div className={styles.col}>
                        <button type="button" onClick={onRemove}>
                            <i className="fas fa-trash"></i>
                        </button>

                        <button type="button" onClick={toggleIsEditing}>
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Task;
