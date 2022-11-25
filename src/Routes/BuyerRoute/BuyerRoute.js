import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useBuyer } from '../../hooks/useBuyer';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    let location = useLocation();

    if (loading || isBuyerLoading) {
        return <div className='flex min-h-screen justify-center items-center'><button className="btn btn-square loading"></button></div>
    }

    if (user && isBuyer) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} ></Navigate>
};

export default BuyerRoute;