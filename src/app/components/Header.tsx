import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={[styles.content, 'container'].join(' ')}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        Todo App
                    </div>

                    <div className={styles.info}>
                        <a className={styles['info-button']}>
                            <i className="fas fa-info-circle"></i>
                        </a>

                        <div className={styles['info-content']}>
                            Inspired by&nbsp;
                            <a target="_blank">Richard Park</a>'s&nbsp;
                            <a target="_blank">Todo Angular Firebase</a>,
                            developed by <a target="_blank">Yulian Karapetkov</a>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <a className={styles['sign-out-button']}>
                        Sign Out
                    </a>
                    <a className={styles.github} target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
