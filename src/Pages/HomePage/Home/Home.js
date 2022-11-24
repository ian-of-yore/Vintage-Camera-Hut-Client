import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';

const Home = () => {
    return (
        <div>
            <h3 className='text-4xl font-sans font-semibold my-10'>This is the homepage</h3>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;