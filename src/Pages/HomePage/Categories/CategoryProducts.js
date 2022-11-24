import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../Dashboard/Buyers/BookingModal/BookingModal';
import CategoryProductsCard from './CategoryProductsCard';

const CategoryProducts = () => {
    const products = useLoaderData();

    const handleBookingModal = (product) => {
        console.log(product)
    }

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 gap-10'>
                {
                    products.map(product => <CategoryProductsCard
                        key={product._id}
                        product={product}
                        handleBookingModal={handleBookingModal}
                    ></CategoryProductsCard>)
                }
            </div>
            {
                products.map(product => <BookingModal
                    key={product._id}
                    product={product}
                    handleBookingModal={handleBookingModal}
                ></BookingModal>)
            }
        </div>
    );
};

export default CategoryProducts;