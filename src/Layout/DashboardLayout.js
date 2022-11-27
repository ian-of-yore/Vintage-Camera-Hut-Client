import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';
import { useBuyer } from '../hooks/useBuyer';
import { useSeller } from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    const dashboardItems = <>
        {
            isBuyer && <>
                <li className='mb-3'><Link to='/dashboard/my-orders'>My Orders</Link></li>
                <li className='mb-3'><Link to='/dashboard/my-wishlist'>My Wishlist</Link></li>
            </>
        }
        {
            isSeller && <>
                <li className='mb-3'><Link to='/dashboard/add-product'>Add Product</Link></li>
                <li className='mb-3'><Link to='/dashboard/my-products'>My Products</Link></li>
            </>
        }
        {
            isAdmin && <>
                <li className='mb-3'><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                <li className='mb-3'><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                <li className='mb-3'><Link to='/dashboard/reported-items'>Reported Items</Link></li>
            </>
        }
    </>

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-accent">
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-secondary text-white">
                        {dashboardItems}
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;