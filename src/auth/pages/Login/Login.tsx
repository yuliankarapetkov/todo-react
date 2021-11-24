import { Button } from '../../../app/components';
import styles from './Login.module.css';
import { actions, selectSignInLoading } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const signInLoading = useSelector(selectSignInLoading);

    const signIn = () => dispatch(actions.signIn());

    return (
        <div>
            <div className={[styles.content, 'container'].join(' ')}>
                <h1 className={styles.title}>Sign in</h1>

                <Button
                    loading={signInLoading}
                    onClick={signIn}
                >
                    Anonymously
                </Button>
            </div>
        </div>
    );
}

export default Login;
