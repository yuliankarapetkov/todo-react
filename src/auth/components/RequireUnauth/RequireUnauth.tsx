import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

function RequireUnauth ({ children }: any) {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    return (
        !isAuthenticated
        ? children
        : <Navigate to="/tasks" replace />
    );
}


export default RequireUnauth;
