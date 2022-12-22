import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProductCard from './AdvertisedProductCard';

const AdvertisedProducts = () => {
    const { data: advertisedProducts = [], } = useQuery({
        queryKey: ['advertised-products'],
        queryFn: async () => {
            const res = await fetch('https://rangefinder-server.vercel.app/advertised-products');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            {
                advertisedProducts.length &&
                <div className='w-11/12 mx-auto mt-20 mb-10'>
                    <h2 className='font-serif text-3xl text-center text-secondary mb-4'>Trending Now!</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {
                            advertisedProducts.map(product => <AdvertisedProductCard
                                key={product._id}
                                product={product}
                            ></AdvertisedProductCard>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AdvertisedProducts;