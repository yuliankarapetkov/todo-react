import { actions } from '../../../auth/store';
import styles from './Header.module.css';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

const parkGitHubUrl = 'https://github.com/r-park';
const parkDemoUrl = 'https://ng2-todo-app.firebaseapp.com/';
const authorGitHubUrl = 'https://github.com/yuliankarapetkov'
const demoCodeUrl = 'https://github.com/yuliankarapetkov/todo-app';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const [infoVisible, setInfoVisible] = useState(false);

    const signOut = () => dispatch(actions.signOut());

    const showInfo = (e: React.MouseEvent) => {
        e.preventDefault();

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
                        <a className={styles['info-button']} onClick={showInfo} href="/">
                            <i className="fas fa-info-circle"></i>
                        </a>

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
                    <a className={styles['sign-out-button']} onClick={signOut} href="/">
                        Sign Out
                    </a>

                    <a href={demoCodeUrl} className={styles.github} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
