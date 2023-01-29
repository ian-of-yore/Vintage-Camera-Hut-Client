import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {

    const categories = [
        { name: 'Point & Shoot' },
        { name: 'Mirrorless' },
        { name: 'DSLR' },
        { name: 'Action' },
        { name: 'Medium Format' },
        { name: 'Film' },
    ]


    return (
        <div className='w-11/12 mx-auto grid grid-cols-3 md:grid-cols-6 gap-4'>
            {
                categories.map(category => <motion.div
                    animate={{ y: -10, scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 2 }}
                >
                    <h1 className='text-2xl font-serif border-t-4 border-x-4 border-t-indigo-800 p-3 bg-stone-900'>{category.name}</h1>
                </motion.div>)
            }
        </div>
    );
};

export default Test;