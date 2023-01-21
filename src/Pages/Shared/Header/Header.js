import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        userLogOut()
            .then(() => { toast.success('You Have Logged Out') })
            .catch((err) => console.log(err))
    }

    const menuItems = <>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About</Link></li>
        {/* {
            user?.email ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li onClick={handleLogOut}><Link>Logut</Link></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        } */}
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

    return (
        <div className='bg-primary text-white'>
            <div className="navbar md:w-11/12 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 text-white rounded-box w-40">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Vintage Camera Hut</Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    {
                        user && <>
                            <div className="avatar">
                                <div className="w-9 mr-3 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <div className='font-mono text-xl'>
                                {user?.displayName}
                            </div></>
                    }
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='hidden lg:hidden navbar-end'>
                    {
                        user && <>
                            <div className="avatar">
                                <div className="w-9 mr-3 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <div className='font-mono text-xl'>
                                {user?.displayName}
                            </div></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;