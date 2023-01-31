import React, { useState } from 'react';
import './OverflowCarousel.css';
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
// import astronaut from "../../../assests/slickCarousel/astronaut.png";
// import celebrating from "../../../assests/slickCarousel/celebrating.png";
// import education from "../../../assests/slickCarousel/education.png";
// import taken from "../../../assests/slickCarousel/taken.png";

import img01 from '../../../assests/Slider/Resize/rsz_1background05.jpg';
import img02 from '../../../assests/Slider/Resize/slider07.jpg';
import img03 from '../../../assests/Slider/Resize/slider08.jpg';
import img04 from '../../../assests/Slider/Resize/background08.jpg';

const images = [img01, img02, img03, img04];

const OverflowCarousel = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow -bottom-10 xl:-bottom-14 right-28 sm:right-40 md:right-60 lg:right-96" onClick={onClick}>
                <FaArrowRight className='w-10 h-5 text-white hover:text-gray-400 btn btn-sm' />
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow -bottom-10 xl:-bottom-14 left-28 sm:left-40 md:left-60 lg:left-96" onClick={onClick}>
                <FaArrowLeft className='w-10 h-5 text-white hover:text-gray-400 btn btn-sm' />
            </div>
        );
    };
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };

    return (
        <motion.div
            animate={{ y: -50 }}
            transition={{ duration: 0.8 }}
            className='w-11/12 mx-auto pt-16 sm:pt-28'
        >
            <div className=' bg-stone-900 h-[530px] sm:min-h-screen rounded-xl border-t-8 pt-5 sm:pt-8 pb-10 px-3 sm:px-8 text-justify font-serif border-t-indigo-600'>
                <div className='h-40 sm:h-[300px] md:h-[380px] lg:h-[520px]'>
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                <img src={img} alt={img} className='h-40 sm:h-[250px] md:h-[320px] lg:h-[450px]' />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p className='text-sm sm:text-lg md:text-xl text-white bg-stone-900 pt-20 sm:pt-10 md:pt-6 lg:pt-10'>
                    We transform the way that people buy, sell and trade in photography accessories.
                    We have always been committed to making kits more accessible and affordable, and helping to visualize a more sustainable future.
                    An online platform for used photography and videography equipment, Vintage Camera Hut is a destination for everyone,
                    whether you've just discovered your passion for visual storytelling or you're already a pro. We have a rigorous vetting process to verify the sellers.
                    Come! Start your long cherished journey with us today!
                </p>
            </div>
        </motion.div>
    );
};

export default OverflowCarousel;