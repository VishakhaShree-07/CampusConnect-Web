import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div style={{textAlign: 'center', marginTop: '5rem'}}>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (requireAdmin && user.role !== 'admin') {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default ProtectedRoute;
