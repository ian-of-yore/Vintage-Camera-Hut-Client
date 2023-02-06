import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl";
import { GiPriceTag } from "react-icons/gi";
import CategoryTabsProducts from '../HomePage/CategoryTabs/CategoryTabsProducts';
import CategoryProducts from '../HomePage/Categories/CategoryProducts';

const Products = () => {
    const { data: allProducts = [], } = useQuery({
        queryKey: ['advertised-products'],
        queryFn: async () => {
            const res = await fetch('https://rangefinder-server.vercel.app/advertised-products');
            const data = await res.json();
            return data;
        }
    })

    const [category, setCategory] = useState('All Products');
    const handleSelectCategory = (e) => {
        setCategory(e.target.value)
    };

    return (
        <div className='w-11/12 mx-auto my-5 sm:my-10'>
            <div className='hero-content flex-col sm:flex-row sm:justify-center sm:items-center'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-semibold text-center text-gray-900 sm:mb-5 mr-5 pt-3 sm:pt-2'>Check out our inventory</h1>
                <select onChange={handleSelectCategory} className="select w-72 sm:w-60 md:w-72 lg:w-96 bg-gray-900 text-white sm:text-base lg:text-lg">
                    <option value='All Products' defaultValue>All Products</option>
                    <option value='Film' >Film</option>
                    <option value='Point & Shoot' >Point & Shoot</option>
                    <option value='Mirrorless' >Mirrorless</option>
                    <option value='DSLR' >DSLR</option>
                    <option value='Action' >Action</option>
                    <option value='Medium Format' >Medium Format</option>
                </select>
            </div>
            <div>
                {
                    category === 'All Products' ?
                        <div>
                            <h3 className='mb-5 font-serif text-3xl text-black mt-10 text-left underline'>All available products in our Inventory</h3>
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
                        :
                        <CategoryProducts category={category}></CategoryProducts>
                }
            </div>
        </div>
    );
};

export default Products;