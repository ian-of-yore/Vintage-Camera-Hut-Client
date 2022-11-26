import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const PageNotFound = () => {
    return (
        <div>
            <Header></Header>
            <h3 className='text-black'>This is the 404 page</h3>
            <Footer></Footer>
        </div>
    );
};

export default PageNotFound;