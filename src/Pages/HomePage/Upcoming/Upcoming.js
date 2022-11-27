import React from 'react';
import img from '../../../assests/film.jpg'

const Upcoming = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row md:w-9/12 md:mx-auto">
                <div className='md:w-1/2'>
                    <img src={img} alt='' className="max-w-lg shadow-2xl" />
                </div>
                <div className='md:w-1/2 text-left text-secondary'>
                    <h1 className="text-4xl font-serif">Looking to buy film?</h1>
                    <p className="py-6 font-serif">
                        Keep an eye out for our upcoming products. We will add a huge selection of colour and black & white films.
                        We will stock some of the rarest, expired and antique <strong>35mm</strong> and <strong>120mm</strong> films.
                    </p>
                    <button className="btn btn-warning text-slate-800">Keep Me Updated!</button>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;