import React from 'react';

const AdvertisedProductCard = ({ product }) => {
    const { _id, img, name, condition, location, resellPrice } = product;

    return (
        <div className='w-full shadow-2xl rounded-none'>
            <div className='h-72 bg-slate-800'>
                <div className='h-64'>
                    <img src={img} alt="" className='w-full h-full' />
                </div>
                <div className='h-8 bg-white text-secondary flex justify-between px-4 items-center'>
                    <p className='text-base font-mono'>{name}</p>
                    <p>${resellPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedProductCard;