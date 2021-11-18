import styles from './TaskForm.module.css';

function TaskForm() {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What needs to be done?"
                />
            </form>
        </div>
    )
}

export default TaskForm;
