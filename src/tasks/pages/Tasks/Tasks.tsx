
import { actions} from '../../store';
import styles from './Tasks.module.css';
import { useDispatch } from 'react-redux';
import { TaskForm, TaskList } from '../../components';

const Tasks: React.FC = () => {
    const dispatch = useDispatch();
    const onCreate = (description: string) => dispatch(actions.createTask(description));
    
    return (
        <div>
            <div className={styles.header}>
                <div className="container">
                    <TaskForm onCreate={onCreate} />
                </div>
            </div>

            <TaskList />
        </div>
    );
}

export default Tasks;
