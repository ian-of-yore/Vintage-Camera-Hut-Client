import React from 'react';

const CategoryProductsCard = ({ product }) => {
    const { _id, img, name, condition, location, originalPrice, resellPrice, sellerName, usedYears, phone, } = product;

    return (
        <div className='w-10/12 mx-auto h-96'>
            <div className="card md:card-side w-full h-full rounded-none shadow-xl">
                <figure className='w-full md:w-1/2'>
                    <img src={img} className='h-full md:h-full w-full' alt="Album" />
                </figure>
                <div className="w-full md:w-1/2 bg-secondary h-1/2 md:h-full">
                    <div className='p-5 text-accent h-5/6'>
                        <h2 className="text-center text-xl font-mono">{name}</h2>
                        <h4>Condition: <span className='text-white'>{condition}</span></h4>
                        <p className='text-white md:text-xs md:mt-1'>The original price of this Camera was <span className='text-accent'>${originalPrice}</span>, It has been
                            in the possesion of the seller for <span className='text-accent'>${usedYears}</span> years and the seller is asking for <span className='text-accent'>${resellPrice}</span> as its resell value</p>
                        <div className='text-left mt-6 md:text-sm'>
                            <p>Posted By,</p>
                            <div className='flex justify-between items-end'>
                                <div>
                                    <p className='text-white'>{sellerName}</p>
                                    <p className='text-white'>{location}</p>
                                    <p className='text-white'>Contact: {phone}</p>
                                </div>
                                <div>
                                    <p className='text-white'>eto minutes ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-info rounded-none w-full h-1/6">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductsCard;