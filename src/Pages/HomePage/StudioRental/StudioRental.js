import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img01 from '../../../assests/studioSpace.jfif';
import img02 from '../../../assests/studioSpace02.jfif';
import img03 from '../../../assests/studioSpace03.jfif';
import img04 from '../../../assests/studioSpace04.jfif';


const StudioRental = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className='flex h-[700px] sm:h-[700px] md:h-[800px] lg:h-[650px] justify-center items-center w-11/12 mx-auto mt-20 mb-10 md:mt-48 lg:mt-20'
        >
            <div className='h-[700px] sm:h-[700px] md:h-[800px] lg:h-[650px] w-full border-4 border-indigo-700 lg:border-0'
                style={{ clipPath: "polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)" }}
            >
                <div className="card lg:card-side h-full rounded-none bg-white">
                    <div className="card-body lg:w-1/2 flex justify-center items-center lg:border-4 lg:border-r-0 lg:border-indigo-600 h-[250px] sm:h-[250px] md:h-[300px] lg:h-[650px]">
                        <div className='lg:mt-20 pt-16 sm:pt-16 md:pb-5 lg:pb-0 lg:pt-0'>
                            <h1 className='text-lg sm:text-xl md:text-xl lg:text-7xl fontbold font-serif text-gray-900'>Studio Space Rental</h1>
                            <p className='text-sm md:text-base lg:text-lg font-serif text-gray-700 mt-4'>Need a space for one day, a week, a month, or a full year? Our listings provide flexibility,
                                lasting however long you need them to it's up to you. Select the neighborhood that seems to
                                be an ideal fit for your business project. </p>
                            <p className='text-base sm:text-lg lg:text-3xl font-serif font-semibold text-gray-900 text-end lg:mt-20 sm:py-5 md:py-0 lg:pt-0'>$200/hour</p>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            arrows={false}
                        >
                            <figure className='bg-yellow-700 w-full h-full'><img src={img01} alt="Album" className='w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[650px]' /></figure>
                            <figure className='bg-yellow-700 w-full h-full'><img src={img02} alt="Album" className='w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[650px]' /></figure>
                            <figure className='bg-yellow-700 w-full h-full'><img src={img03} alt="Album" className='w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[650px]' /></figure>
                            <figure className='bg-yellow-700 w-full h-full'><img src={img04} alt="Album" className='w-full h-[450px] sm:h-[500px] md:h-[500px] lg:h-[650px]' /></figure>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioRental;