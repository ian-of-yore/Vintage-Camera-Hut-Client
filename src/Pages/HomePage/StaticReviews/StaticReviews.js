import React from 'react';
import bg from '../../../assests/ReviewBackground.jfif';
import img01 from '../../../assests/slickCarousel/astronaut.png';
import img02 from '../../../assests/slickCarousel/celebrating.png';
import img03 from '../../../assests/slickCarousel/education.png';
import img04 from '../../../assests/slickCarousel/taken.png';
import { staticReviews } from './StaticReviewData';


const StaticReviews = () => {
    const reviews = staticReviews;
    console.log(reviews);

    return (
        <div className='w-8/12 mx-auto flex justify-center'>
            <div className="carousel carousel-vertical rounded-box h-80 sm:h-[400px] md:h-[480px] lg:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="hero-overlay "></div>
                        <div className="hero-content text-center text-white pb-80">
                            <div className="w-4/5 mx-auto">
                                <p className="pb-32 text-lg text-stone-900 font-semibold">Received first class service from the Vintage Camera Hut when
                                    buying a point and shoot camera for my daughter's Christmas. Their expert advice
                                    was most welcome and their customer service of the highest standard. I would not
                                    hesitate to use them again or to recommend them. Thank you for all your support.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="card h-80 sm:h-[400px] md:h-[480px] lg:h-[550px] glass w-4/5 sm:w-3/5 md:w-3/5 lg:w-1/2 mx-auto">
                            <figure><img src={img01} alt="car!" className='h-72 sm:h-[350px] md:h-[380px] lg:h-[450px] w-full' /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-lg sm:text-xl md:text-3xl font-mono">Trade In! Win!</h2>
                                <p className='text-sm sm:text-base md:text-lg font-mono hidden sm:block'>Part-exchange your old equipment and put the money towards your latest purchase.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="card h-80 sm:h-[400px] md:h-[480px] lg:h-[550px] glass w-4/5 sm:w-3/5 md:w-3/5 lg:w-1/2 mx-auto">
                            <figure><img src={img03} alt="car!" className='h-72 sm:h-[350px] md:h-[380px] lg:h-[450px] w-full' /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-lg sm:text-xl md:text-3xl font-mono">Find Your "The One"!</h2>
                                <p className='text-sm sm:text-base md:text-lg font-mono hidden sm:block'>Take advantage of our in-store services and speak to one of our expers today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                        <div className="card h-80 sm:h-[400px] md:h-[480px] lg:h-[550px] glass w-4/5 sm:w-3/5 md:w-3/5 lg:w-1/2 mx-auto">
                            <figure><img src={img04} alt="car!" className='h-72 sm:h-[350px] md:h-[380px] lg:h-[450px] w-full' /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-lg sm:text-xl md:text-3xl font-mono">Find Your "The One"!</h2>
                                <p className='text-sm sm:text-base md:text-lg font-mono hidden sm:block'>Take advantage of our in-store services and speak to one of our expers today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticReviews;