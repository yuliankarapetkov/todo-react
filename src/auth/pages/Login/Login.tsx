import { actions } from '../../store';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => dispatch(actions.signIn());

    return (
        <div>
            <div className={[styles.content, 'container'].join(' ')}>
                <h1 className={styles.title}>Sign in</h1>

                <button className={styles.button} type="button" onClick={signIn}>
                    Anonymously
                </button>
            </div>
        </div>
    );
}

export default Login;
