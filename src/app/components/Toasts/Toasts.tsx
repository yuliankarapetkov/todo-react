import { Toast } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { selectToasts } from '../../store/selectors';
import styles from './Toasts.module.css';
import { actions } from '../../store';

const Toasts: React.FC = () => {
    const dispatch = useDispatch();

    const toasts = useSelector(selectToasts);

    const hide = (id: string) => dispatch(actions.hideToast(id));

    return (
        <div className={styles.toasts}>
            {toasts.map(toast => 
                <Toast
                    toast={toast}
                    key={toast.id}
                    onClose={() => hide(toast.id)}
                />
            )}
        </div>
    );
};

export default Toasts;
