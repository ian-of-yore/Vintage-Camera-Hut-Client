import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductsCard from './CategoryProductsCard';

const CategoryProducts = () => {
    const products = useLoaderData();

    return (
        <div className='my-10'>
            <div className='grid grid-cols-1 gap-10'>
                {
                    products.map(product => <CategoryProductsCard
                        key={product._id}
                        product={product}
                    ></CategoryProductsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;