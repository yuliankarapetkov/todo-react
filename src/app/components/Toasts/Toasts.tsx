import { Toast } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { selectToasts } from '../../store/selectors';
import styles from './Toasts.module.css';
import { actions } from '../../store/slices';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Toasts: React.FC = () => {
    const dispatch = useDispatch();

    const toasts = useSelector(selectToasts);

    const hide = (id: string) => dispatch(actions.hideToast(id));

    return (
        <TransitionGroup className={styles.toasts}>
            {toasts.map(toast => 
                <CSSTransition
                    classNames={{
                        enter: styles['toast-enter'],
                        enterActive: styles['toast-enter-active'],
                        exit: styles['toast-exit'],
                        exitActive: styles['toast-exit-active'],
                    }}
                    timeout={500}
                    key={toast.id}
                >
                    <Toast
                        toast={toast}
                        key={toast.id}
                        onClose={() => hide(toast.id)}
                    />
                </CSSTransition>
            )}
        </TransitionGroup>
    );
};

export default Toasts;
