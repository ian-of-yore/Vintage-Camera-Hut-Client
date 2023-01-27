import React from 'react';
import { GiPriceTag } from 'react-icons/gi';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const AdvertisedProductCard = ({ product }) => {
    const { _id, img, name, condition, location, resellPrice } = product;

    return (
        <div className='w-full shadow-2xl rounded-none text-black'>
            <Link to={`/product/${product._id}`} key={product._id}>
                <div className="card rounded-lg card-compact bg-gray-200 shadow-xl mx-0 sm:mx-4 md:mx-4 lg:mx-2 border-b-4 border-indigo-500">
                    <figure><img src={product.img} alt="Shoes" className='h-72 sm:h-60 md:h-52 lg:h-52 w-full' /></figure>
                    <div className="card-body border-x-2 border-indigo-500">
                        <h2 className='card-title'>{product.name}</h2>
                        <div className='flex justify-start items-center'>
                            <GiPriceTag className='w-5 h-5 mr-1'></GiPriceTag>
                            <p className='text-left text-base font-semibold text-black'>{product.resellPrice}$</p>
                        </div>
                        <div className='flex justify-start items-center'>
                            <SlLocationPin className='w-5 h-5 mr-1'></SlLocationPin>
                            <p className='text-left text-base'>{product.location}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdvertisedProductCard;