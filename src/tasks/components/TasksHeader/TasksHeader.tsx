
import { TaskForm } from '../../components';
import { actions} from '../../store';
import styles from './TasksHeader.module.css';
import { useDispatch } from 'react-redux';

const TasksHeader: React.FC = () => {
    const dispatch = useDispatch();
    const onCreate = (description: string) => dispatch(actions.createTask(description));

    return (
        <div className={styles.header}>
            <div className="container">
                <TaskForm onCreate={onCreate} />
            </div>
        </div>
    );
}

export default TasksHeader;
