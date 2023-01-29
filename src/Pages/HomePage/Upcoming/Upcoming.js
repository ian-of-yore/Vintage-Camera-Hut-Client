import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import img from '../../../assests/film.jpg'
import UpcomingModal from './UpcomingModal';

const Upcoming = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(true);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hero min-h-screen"
        >
            <div className="hero-content flex-col md:flex-row w-11/12 mx-auto md:w-9/12">
                <div className='w-full sm:w-9/12 md:w-8/12 mx-auto'>
                    <img src={img} alt='' className="shadow-2xl w-full h-[400px] md:h-full" />
                </div>
                <div className='text-left text-secondary w-full md:w-9/12 mx-auto'>
                    <h1 className="text-4xl font-serif">Looking to buy film?</h1>
                    <p className="py-6 font-serif text-justify">
                        Keep an eye out for our upcoming products. We will add a huge selection of colour and black & white films.
                        We will stock some of the rarest, expired and antique <strong>35mm</strong> and <strong>120mm</strong> films.
                    </p>
                    <label onClick={handleModal} htmlFor="my-modal" className="btn bg-secondary text-white">Keep Me Updated!</label>
                </div>
            </div>
            {
                modalOpen && <UpcomingModal setModalOpen={setModalOpen}></UpcomingModal>
            }
        </motion.div>
    );
};

export default Upcoming;