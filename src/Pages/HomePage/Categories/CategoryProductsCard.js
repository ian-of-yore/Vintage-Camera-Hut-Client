import React from 'react';

const CategoryProductsCard = ({ product, handleBookingModal }) => {
    const { _id, img, name, condition, description, location, originalPrice, resellPrice, sellerName, usedYears, phone, } = product;

    return (
        <div className='w-10/12 mx-auto md:h-96'>
            <div className="card md:card-side w-full h-full rounded-none shadow-xl">
                <figure className='w-full md:w-1/2'>
                    <img src={img} className='h-full md:h-full w-full' alt="Album" />
                </figure>
                <div className="w-full md:w-1/2 bg-secondary h-1/2 md:h-full">
                    <div className='p-5 text-accent h-5/6'>
                        <h2 className="text-center text-2xl font-mono font-semibold mb-1">{name}</h2>
                        <h4><span className='text-lg font-semibold'>Condition: </span><span className='text-white'>{condition}</span></h4>
                        <p className='text-white md:text-base md:mt-2'>The original price of this Camera was <span className='text-accent text-lg'>${originalPrice}</span>, It has been
                            in the possesion of the seller for <span className='text-accent text-lg'>{usedYears}</span> years and the seller is asking for <span className='text-accent text-lg'>${resellPrice}</span> as its resell value</p>
                        <p className='text-left text-white my-3 text-sm'><span className='text-accent font-semibold text-base'>Description:</span> {description.length > 200 ? description.slice(0, 200) + '...' : description}</p>
                        <div className='text-left mt-2 md:text-sm'>
                            <p className='text-lg font-semibold'>Posted By,</p>
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
                    <button className="btn btn-sm btn-info rounded-none w-full h-12 mt-4">Buy Now</button>
                    <label onClick={() => handleBookingModal(product)} htmlFor="booking-modal" className="btn bg-primary">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default CategoryProductsCard;