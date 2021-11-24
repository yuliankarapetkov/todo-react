import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactElement<any, any>;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    return (
        isAuthenticated
        ? children
        : <Navigate to="/login" replace />
    );
}


export default RequireAuth;
