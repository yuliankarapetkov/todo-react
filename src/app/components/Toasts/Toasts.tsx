import { actions } from '../../store/slices';
import { createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToasts } from '../../store/selectors';
import styles from './Toasts.module.css';

import { Toast } from '..';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Toasts: React.FC = () => {
    const dispatch = useDispatch();

    const toasts = useSelector(selectToasts);

    const hide = (id: string) => dispatch(actions.hideToast(id));

    return (
        <TransitionGroup className={styles.toasts} component="div">
            {toasts.map(toast => {
                const ref = createRef<HTMLDivElement>();

                return (
                    <CSSTransition
                        classNames={{
                            enter: styles['toast-enter'],
                            enterActive: styles['toast-enter-active'],
                            exit: styles['toast-exit'],
                            exitActive: styles['toast-exit-active'],
                        }}
                        timeout={500}
                        key={toast.id}
                        nodeRef={ref}
                    >
                        <div ref={ref}>
                            <Toast
                                toast={toast}
                                onClose={() => hide(toast.id)}
                            />
                        </div>
                    </CSSTransition>
                );
            }
            )}
        </TransitionGroup>
    );
};

export default Toasts;
