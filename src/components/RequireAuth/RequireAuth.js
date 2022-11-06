import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))
    const location = useLocation()
    return (
        isAuth
            ? children
            : <Navigate to="/clients" state={{ from: location }} replace />
    );
};

export default RequireAuth;
