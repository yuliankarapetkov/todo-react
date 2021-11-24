import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

interface Props {
    children: React.ReactElement<any, any>;
}

const RequireUnauth: React.FC<Props> = ({ children }) => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    return (
        !isAuthenticated
        ? children
        : <Navigate to="/tasks" replace />
    );
}


export default RequireUnauth;
