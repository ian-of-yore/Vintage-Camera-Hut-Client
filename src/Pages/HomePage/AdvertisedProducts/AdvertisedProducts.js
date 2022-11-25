import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProductCard from './AdvertisedProductCard';

const AdvertisedProducts = () => {
    const { data: advertisedProducts = [], } = useQuery({
        queryKey: ['advertised-products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised-products');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='md:w-11/12 md:mx-auto my-10'>
            <h2 className='text-4xl font-serif font-semibold text-center text-black mb-4'>Recently Advertised Products!</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    advertisedProducts.map(product => <AdvertisedProductCard
                        key={product._id}
                        product={product}
                    ></AdvertisedProductCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedProducts;