import { Button } from '../../../app/components';
import { Task as TaskModel } from '../../models';
import styles from './Task.module.css';
import { useState } from 'react';

interface Props {
    task: TaskModel;
    updateLoading: boolean;
    removeLoading: boolean;
    onUpdate: (task: TaskModel) => void;
    onRemove: () => void;
}

const Task: React.FC<Props> = ({
    task,
    updateLoading = false,
    removeLoading = false,
    onUpdate,
    onRemove
}) => {
    const [description, setDescription] = useState(task.description);
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);
    const [isEditing, setIsEditing] = useState(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
    const toggleIsEditing = () => setIsEditing(oldValue => !oldValue);

    const update = (updated: { isCompleted?: boolean; description?: string }) => {
        const clone: TaskModel = {
            ...task,
            ...updated
        };

        onUpdate(clone);
    }

    const toggleIsCompleted = () => {
        setIsCompleted((oldValue: boolean) => !oldValue);

        update({ isCompleted: !isCompleted });
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        setIsEditing(false);

        update({ description });
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
                        <Button
                            variant="circular"
                            icon="fas fa-times"
                            onClick={toggleIsEditing}
                        />
                    </div>
                </div>
            }

            {!isEditing &&
                <div className={styles.task}>
                    <div className={styles.col}>
                        <Button
                            variant="circular"
                            icon="fas fa-check"
                            active={task.isCompleted}
                            loading={updateLoading}
                            onClick={toggleIsCompleted}
                        />
                    </div>

                    <div className={styles.col}>
                        <div className={styles.description}>
                            {description}
                        </div>
                    </div>

                    <div className={styles.col}>
                        <Button
                            variant="circular"
                            icon="fas fa-trash"
                            className={styles.button}
                            loading={removeLoading}
                            onClick={onRemove}
                        />

                        <Button
                            variant="circular"
                            icon="fas fa-pen"
                            onClick={toggleIsEditing}
                        />
                    </div>
                </div>
            }
        </>
    );
}

export default Task;
