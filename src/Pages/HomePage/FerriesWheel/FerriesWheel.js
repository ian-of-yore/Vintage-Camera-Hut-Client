import React, { useEffect } from 'react';
import './FerriesWheel.css';
import TagCloud from 'TagCloud';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { useState } from 'react';

const FerriesWheel = () => {

    const { height, width } = useWindowDimensions();
    // console.log('height', height, 'width', width)

    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "Sony",
                "FujiFilm",
                "Leica",
                "Nikon",
                "Panasonic",
                "Ricoh",
                "Canon",
                "Olympus",
                "Pentax",
                "GoPro",
                "Hasselblad",
                "Wolfang",
                "Akaso",
                "Mamiya",
                "Minalto"
            ];

            const options = {
                radius: 200,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        // <div className="hero flex justify-center items-center bg-white border-y-8 border-indigo-400">
        //     <div className="hero-content flex-col-reverse lg:flex-row">
        //         <div className='bg-gray-900 text-white'>
        //             <h1 className='text-4xl font-semibold'>Kire mama ki khobor?</h1>
        //         </div>
        //         <div className="w-full h-full flex justify-center items-center rounded-xl">
        //             {/* span tag className must be "tagcloud"  */}
        //             <span className="tagcloud"></span>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full h-full flex justify-center items-center bg-stone-900">
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
        </div>
    );
};

export default FerriesWheel;