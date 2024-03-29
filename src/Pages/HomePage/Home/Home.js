import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Blogs from '../Blogs/Blogs';
import Categories from '../Categories/Categories';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import FerriesWheel from '../FerriesWheel/FerriesWheel';
import OverflowCarousel from '../OverflowCarousel/OverflowCarousel';
import Slider from '../Slider/Slider';
import StaticReviews from '../StaticReviews/StaticReviews';
import StudioRental from '../StudioRental/StudioRental';
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
            <StaticReviews></StaticReviews>
            <StudioRental></StudioRental>
            <Upcoming></Upcoming>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;