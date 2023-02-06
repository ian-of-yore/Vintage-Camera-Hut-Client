import React from 'react';
import img from '../../assests/AboutUs.jfif';

const About = () => {
    return (
        <div className='my-20 min-h-screen w-11/12 mx-auto md:w-10/12'>
            <h1 className='text-2xl sm:text-5xl font-serif mt-14 mb-10 text-gray-900'>We are Vintage Camera Hut</h1>
            <div className="hero mt-4">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl lg:h-[450px] p-0">
                    <div className='lg:w-1/2 h-full'>
                        <figure className='w-full h-full'><img src={img} alt="Album" className='w-full h-full' /></figure>
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 h-full">
                        <div className="card-body text-gray-900 text-left flex justify-center items-center">
                            <div>
                                <p>
                                    We transform the way that people buy, sell and trade in photo and video kit.
                                    An online platform for used photography and videography equipment, MPB is a
                                    destination for everyone, whether you've just discovered your passion for visual
                                    storytelling or you're already a pro.
                                    <br />
                                    <br />
                                    Founded by Matt Barker in 2011, MPB has always been committed to making kit
                                    more accessible and affordable, and helping to visualize a more sustainable future.
                                    We recirculate more than 300,000 items of used kit every year, extending the life and
                                    creative potential of photo and video equipment for creators around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-gray-900 '>
                <h1 className='text-xl sm:text-3xl font-serif mt-14 mb-5'>The Vintage Camera Hut Promise</h1>
                <p className='text-justify'>Our unique platform means that we can offer the right price for every piece of kit based on make, model,
                    condition and market, across a huge selection of camera bodies, lenses, filters and accessories.
                    At Vintage Camera Hut, there's something for everyone who wants to try something new, hone their skills,
                    or pursue their passion — and it won't cost the earth.
                    Headquartered in the creative communities of Brighton, Brooklyn and Berlin, the MPB team includes
                    trained camera experts and seasoned photographers and videographers who bring their passion to work
                    every day to deliver outstanding service. Every piece of kit is inspected carefully by our product
                    specialists and comes with a six-month warranty to give our customers peace of mind that buying used
                    doesn't mean sacrificing reliability.
                </p>
            </div>
        </div>
    );
};

export default About;