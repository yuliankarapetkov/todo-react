import { Button } from '..';
import styles from './Header.module.css';
import { useState } from 'react';
import { actions, selectIsAuthenticated, selectSignOutLoading } from '../../../auth/store';
import { useDispatch, useSelector } from 'react-redux';

const parkGitHubUrl = 'https://github.com/r-park';
const parkDemoUrl = 'https://ng2-todo-app.firebaseapp.com/';
const authorGitHubUrl = 'https://github.com/yuliankarapetkov'
const demoCodeUrl = 'https://github.com/yuliankarapetkov/todo-react';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const signOutLoading = useSelector(selectSignOutLoading);

    const [infoVisible, setInfoVisible] = useState(false);

    const signOut = () => {
        dispatch(actions.signOut());
    }

    const showInfo = () => {
        setInfoVisible(oldValue => !oldValue);
    };

    return (
        <div className={styles.header}>
            <div className={[styles.content, 'container'].join(' ')}>
                <div className={styles.left}>
                    <div className={styles.brand}>
                        Todo App
                    </div>

                    <div className={styles.info}>
                        <Button
                            icon="fas fa-info-circle"
                            variant="text"
                            onClick={showInfo}
                        />

                        {infoVisible &&
                            <div className={styles['info-content']}>
                                Inspired by&nbsp;
                                <a href={parkGitHubUrl} target="_blank" rel="noreferrer">Richard Park</a>'s&nbsp;
                                <a href={parkDemoUrl} target="_blank" rel="noreferrer">Todo Angular Firebase</a>,
                                developed by <a href={authorGitHubUrl} target="_blank" rel="noreferrer">Yulian Karapetkov</a>
                            </div>
                        }
                    </div>
                </div>

                <div className={styles.right}>
                    {isAuthenticated &&
                        <Button variant="text" loading={signOutLoading} onClick={signOut}>
                            Sign out
                        </Button>
                    }

                    <a href={demoCodeUrl} className={styles.github} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
