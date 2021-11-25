import { Button } from '..';
import { Toast as ToastModel } from '../../models';
import styles from './Toast.module.css';

interface Props {
    toast: ToastModel
    onClose: () => void;
}

const Toast: React.FC<Props> = ({
    toast: { message, type = 'success' },
    onClose
}) => {
    return (
        <div className={[styles.toast, styles[type]].join(' ')}>
            <span>
                {message}
            </span>

            <Button variant="text" icon="fas fa-times" onClick={onClose} />
        </div>
    );
};

export default Toast;
