import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';
import FerriesWheel from '../FerriesWheel/FerriesWheel';
import Slider from '../Slider/Slider';
import Test from '../Test/Test';
import TypeWriter from '../TypeWriter/TypeWriter';
import Upcoming from '../Upcoming/Upcoming';
import WhoAreWe from '../WhoAreWe/WhoAreWe';

const Home = () => {
    return (
        <div>
            <TypeWriter></TypeWriter>
            {/* <FerriesWheel></FerriesWheel> */}
            <WhoAreWe></WhoAreWe>
            <Slider></Slider>
            <Categories></Categories>
            <AdvertisedProducts></AdvertisedProducts>
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;