import React from 'react';
import TagCloud from "@frank-mayer/react-tag-cloud"
import { toast } from 'react-hot-toast';

const FerriesWheel = () => {

    // const options = {
    //     radius: 200,
    //     maxSpeed: "normal",
    //     initSpeed: "normal",
    //     keep: true,
    // };

    return (
        <TagCloud
            options={(w) => ({
                radius: Math.min(500, w.innerWidth, w.innerHeight) / 3,
                maxSpeed: "fast",
            })}
            onClick={(tag, ev) => toast(tag)}
            onClickOptions={{ passive: true }}
            // options={options}
            className='text-white font-semibold text-lg sm:text-2xl bg-stone-900'
        >
            {[
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
            ]}
        </TagCloud>
    );
};

export default FerriesWheel;