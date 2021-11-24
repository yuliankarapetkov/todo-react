import styles from './Button.module.css';

interface Props {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'rect' | 'circular';
    active?: boolean;
    loading?: boolean;
    icon?: string;
    children?: any;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    className = '',
    type = 'button',
    variant = 'rect',
    active = false,
    loading = false,
    icon,
    children,
    onClick
}) => {
    const iconVisible = !!icon || loading;
    const iconClassName = loading ? 'fa fa-spinner fa-spin' : icon;

    return (
        <button
            className={[
                styles.button,
                styles[variant],
                active && styles.active,
                className].join(' ')
            }
            type={type}
            onClick={onClick}
        >
            {iconVisible && <i className={iconClassName}></i>}
            
            {!loading && children}
        </button>
    );
}

export default Button;
