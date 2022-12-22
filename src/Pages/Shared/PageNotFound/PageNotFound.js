import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import img from '../../../assests/404Page.jpg';

const PageNotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
                <img src={img} className='w-full min-h-screen' alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;