import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useAdmin } from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    let location = useLocation();

    if (loading || isAdminLoading) {
        return <div className='flex min-h-screen justify-center items-center'><button className="btn btn-square loading"></button></div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default AdminRoute;