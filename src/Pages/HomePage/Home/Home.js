import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';
import FerriesWheel from '../FerriesWheel/FerriesWheel';
import Slider from '../Slider/Slider';
import TypeWriter from '../TypeWriter/TypeWriter';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>
            <TypeWriter></TypeWriter>
            <FerriesWheel></FerriesWheel>
            <Slider></Slider>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;