import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import FerriesWheel from '../FerriesWheel/FerriesWheel';

const TypeWriter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='w-full bg-stone-900 flex justify-center items-center pt-10 lg:col-span-3'>
                <div className='px-4 sm:px-0'>
                    <div className='text-2xl sm:text-3xl md:text-4xl font-serif sm:flex'>
                        <h1>Don't Wait Till You Can Afford a New One!</h1>
                        <span className='hidden sm:block'>
                            <Typewriter
                                words={[" "]}
                                loop={1}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <div className='text-xl sm:text-3xl font-mono pt-4'>
                        <Typewriter
                            words={['Trade In! Win!', 'Pre-Owned! Perfected!', 'Find Your "The One"']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
            </div>
            <div className='lg:col-span-2'>
                <FerriesWheel></FerriesWheel>
            </div>
        </div>
    );
};

export default TypeWriter;