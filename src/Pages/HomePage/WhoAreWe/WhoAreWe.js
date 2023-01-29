import React from 'react';
import { motion } from 'framer-motion';

const WhoAreWe = () => {
    return (
        <motion.div
            animate={{ y: -90 }}
            transition={{ duration: 0.8 }}
        >
            <div className='w-11/12 sm:w-10/12 mx-auto pt-16'>
                <p className='text-xl text-white bg-stone-900 border-4 p-8 text-justify font-serif border-t-indigo-700 border-y-indigo-700'>
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

export default WhoAreWe;