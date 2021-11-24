import { Navigate } from 'react-router-dom'
import { selectIsAuthenticated } from '../../store';
import { useSelector } from 'react-redux';

interface Props {
    children: React.ReactElement<any, any>;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return (
        isAuthenticated
        ? children
        : <Navigate to="/login" replace />
    );
}


export default RequireAuth;
