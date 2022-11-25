import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useSeller } from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);

    let location = useLocation();

    if (loading || isSellerLoading) {
        return <div className='flex min-h-screen justify-center items-center'><button className="btn btn-square loading"></button></div>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default SellerRoute;