import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

function RequireAuth ({ children }: any) {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const getAuthStateLoading = useSelector((state: any) => state.auth.getAuthStateLoading);
    const getAuthStateLoaded = useSelector((state: any) => state.auth.getAuthStateLoaded);

    if (!getAuthStateLoaded || getAuthStateLoading) {
        return <div>Loading..</div>;
    }

    return (
        isAuthenticated
        ? children
        : <Navigate to="/login" replace />
    );
}


export default RequireAuth;
