import styles from './Login.module.css';

function Login() {
    return (
        <div>
            <div className={[styles.content, 'container'].join(' ')}>
                <h1 className={styles.title}>Sign in</h1>

                <button className={styles.button} type="button">
                    Anonymously
                </button>
            </div>
        </div>
    );
}

export default Login;
