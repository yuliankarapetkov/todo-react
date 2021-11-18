import styles from './TaskForm.module.css';
import { useRef, useState } from 'react';

const MAX_LENGTH = 64;

function TaskForm({ onCreate }: { onCreate: (value: string) => void; }) {
    const [description, setDescription] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => setDescription('');
    const inputChange = (e: any) => setDescription(e.target.value);

    const submit = (e: any) => {
        e.preventDefault();

        const trimmed = description.trim();

        if (trimmed.length) onCreate(trimmed);

        clearInput();
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={submit}>
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="What needs to be done?"
                    autoFocus
                    maxLength={MAX_LENGTH}
                    className={styles.input}
                    ref={inputRef}
                    value={description}
                    onChange={inputChange}
                />
            </form>
        </div>
    )
}

export default TaskForm;
