import React from 'react';
import './Slider.css';
import img01 from '../../../assests/slider01.jpg';
import img03 from '../../../assests/slider08.jpg';
import img02 from '../../../assests/slider07.jpg';
import bg01 from '../../../assests/background01.jfif';
import bg03 from '../../../assests/background05.jpg';
import bg05 from '../../../assests/background08.jpg';


const Slider = () => {

    // mt-16 w-11/12 mx-auto lg:w-10/12
    return (
        <div className='min-h-screen mb-20 w-11/12 mx-auto'>
            <div className="carousel w-full h-96 sm:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero rounded-xl" style={{ backgroundImage: `url(${bg03})` }}>
                        <div className="card h-80 sm:h-[400px] md:h-[480px] lg:h-[550px] glass w-4/5 sm:w-3/5 md:w-3/5 lg:w-1/2 mx-auto">
                            <figure><img src={img02} alt="car!" className='h-72 sm:h-[350px] md:h-[380px] lg:h-[450px] w-full' /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-lg sm:text-xl md:text-3xl font-mono">Pre-owned! Perfected.</h2>
                                <p className='text-sm sm:text-base md:text-lg font-mono hidden sm:block'>Save money on quality equipment when you buy second hand from us</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: `url(${bg01})` }}>
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
                    <div className="hero" style={{ backgroundImage: `url(${bg05})` }}>
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
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;