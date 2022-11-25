import React from 'react';

const AdvertisedProductCard = ({ product }) => {
    const { _id, img, name, condition, location, resellPrice } = product;

    return (
        <div className='w-full shadow-2xl'>
            <div className="hero h-64" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
            </div>
        </div>
    );
};

export default AdvertisedProductCard;