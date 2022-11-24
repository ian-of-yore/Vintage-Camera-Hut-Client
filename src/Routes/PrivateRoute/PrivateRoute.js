import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading === true) {
        return <div className='flex justify-center min-h-screen items-center'><button className="btn btn-primary loading">loading</button></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRoute;