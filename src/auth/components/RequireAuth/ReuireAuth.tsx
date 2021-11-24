import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

function RequireAuth ({ children }: any) {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    return (
        isAuthenticated
        ? children
        : <Navigate to="/login" replace />
    );
}


export default RequireAuth;
