import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { GiPriceTag } from "react-icons/gi";

const Products = () => {
    const { data: allProducts = [], } = useQuery({
        queryKey: ['advertised-products'],
        queryFn: async () => {
            const res = await fetch('https://rangefinder-server.vercel.app/advertised-products');
            const data = await res.json();
            return data;
        }
    })
    // <Link to={`/trending/${product._id}`}><button className='btn btn-outline rounded-none hover:text-white hover:bg-gray-700 w-full'>See Details</button></Link>

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                {
                    allProducts.length && allProducts.map(product => <Link to={`/product/${product._id}`} key={product._id}>
                        <div className="card rounded-lg card-compact bg-gray-900 shadow-xl">
                            <figure><img src={product.img} alt="Shoes" className='h-72 sm:h-96 md:h-72 lg:h-72 w-full' /></figure>
                            <div className="card-body">
                                <h2 className='card-title'>{product.name}</h2>
                                <div className='flex justify-start items-center'>
                                    <GiPriceTag className='w-5 h-5 mr-1'></GiPriceTag>
                                    <p className='text-left text-base font-semibold text-white'>{product.resellPrice}$</p>
                                </div>
                                <div className='flex justify-start items-center'>
                                    <SlLocationPin className='w-5 h-5 mr-1'></SlLocationPin>
                                    <p className='text-left text-base'>{product.location}</p>
                                </div>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Products;