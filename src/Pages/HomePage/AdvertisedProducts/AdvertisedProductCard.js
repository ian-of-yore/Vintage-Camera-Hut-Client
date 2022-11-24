import React from 'react';

const AdvertisedProductCard = ({ product }) => {
    const { _id, img, name, condition, location, resellPrice } = product;

    return (
        <div className='w-10/12 mx-auto md:h-64 md:w-full'>
            <div className="card md:card-side w-full h-full rounded-none shadow-xl">
                <figure className='w-full md:w-1/2'>
                    <img src={img} className='h-full md:h-full w-full' alt="Album" />
                </figure>
                <div className="w-full md:w-1/2 bg-secondary h-1/2 md:h-full">
                    <div className='p-5 text-accent h-5/6 text-left font-serif text-lg'>
                        <h2 className="text-center text-2xl font-semibold mb-3">{name}</h2>
                        <p>Price:<span className='text-white font-mono'> ${resellPrice}</span></p>
                        <h4>Condition: <span className='text-white font-mono'>{condition}</span></h4>
                        <p>Near: <span className='text-white font-sans'>{location}</span></p>
                        <p>Posted: <span className='text-white font-sans'>eto minutes ago</span></p>
                    </div>
                    <button className="btn btn-sm btn-info rounded-none w-full h-1/6">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedProductCard;