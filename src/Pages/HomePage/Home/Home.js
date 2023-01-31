import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Categories from '../Categories/Categories';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import FerriesWheel from '../FerriesWheel/FerriesWheel';
import OverflowCarousel from '../OverflowCarousel/OverflowCarousel';
import Slider from '../Slider/Slider';
import Test from '../Test/Test';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import TypeWriter from '../TypeWriter/TypeWriter';
import Upcoming from '../Upcoming/Upcoming';
import WhoAreWe from '../WhoAreWe/WhoAreWe';

const Home = () => {
    return (
        <div>
            <TypeWriter></TypeWriter>
            {/* <FerriesWheel></FerriesWheel> */}
            {/* <WhoAreWe></WhoAreWe> */}
            <OverflowCarousel></OverflowCarousel>
            <TrendingProducts></TrendingProducts>
            <CategoryTabs></CategoryTabs>
            {/* <Slider></Slider> */}
            {/* <Categories></Categories> */}
            {/* <AdvertisedProducts></AdvertisedProducts> */}
            <Upcoming></Upcoming>
        </div>
    );
};

export default Home;