import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;