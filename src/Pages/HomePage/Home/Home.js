import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <h3 className='text-4xl font-sans font-semibold my-10'>This is the homepage</h3>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
        </div>
    );
};

export default Home;