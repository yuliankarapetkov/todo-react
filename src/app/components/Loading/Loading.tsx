import styles from './Loading.module.css';

function Loading() {

  return (
    <div className={styles.loading}>
        <i className={[styles.icon, 'fa fa-spinner fa-spin'].join(' ')}></i>

        <span className={styles.text}>
          Loading..
        </span>
    </div>
  );
}

export default Loading;
