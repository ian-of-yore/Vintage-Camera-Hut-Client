import React from 'react';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useSellerVerified } from '../../../hooks/useSellerVerified';
import ContactSellerModal from './ContactSellerModal';

const AdvertisedProductDetails = () => {
    const { _id, img, name, category, condition, description, location,
        originalPrice, phone, postTime, purchaseYear, resellPrice,
        sellerEmail, sellerName, usedYears } = useLoaderData();

    const [isSellerVerified] = useSellerVerified(sellerEmail);
    const navigate = useNavigate();

    const handleNavigateToCategory = (category) => {
        navigate(`/category/${category}`)
    }

    const timeDiff = (postTime) => {
        const presentTime = new Date();
        const previousTime = new Date(postTime);

        const diffMs = (presentTime - previousTime) // diff in milliseconds
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        const diffHours = Math.floor((diffMs % 86400000) / 3600000); // hours
        const diffDays = Math.floor(diffMs / 86400000); // days

        // console.log('days', diffDays, 'hours', diffHours, 'mins', diffMins)
        return { diffDays, diffHours, diffMins }
    }
    const { diffMins, diffHours, diffDays } = timeDiff(postTime);

    return (
        <div className='min-h-screen w-11/12 mx-auto md:w-9/12 md:mx-auto flex justify-center items-center my-10'>
            <div className="rounded-lg shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-secondary h-[400px]">
                    <div className='md:col-span-3'>
                        <img src={img} className="rounded-lg shadow-2xl h-[400px] w-full" alt='' />
                    </div>
                    <div className='md:col-span-2 text-left pl-3 pr-5 py-5 flex flex-col justify-between'>
                        <div>
                            <h1 className="text-5xl font-bold text-accent">{name}</h1>
                        </div>
                        <div>
                            <p className="text-xl font-mono font-semibold text-accent"><span className='text-white'>Price:</span> ${resellPrice}</p>
                            <p className="text-xl font-mono font-semibold text-accent"><span className='text-white'>Condition:</span> {condition}</p>
                            <p className="text-xl font-mono font-semibold text-accent"><span className='text-white'>Posted:</span> {
                                diffDays > 0 && `${diffDays} Days, `
                            }
                                {
                                    diffHours > 0 && `${diffHours} Hours `
                                }
                                {
                                    diffMins > 0 && `${diffMins} Minutes ago`
                                }</p>
                            <p className="text-xl font-mono font-semibold text-accent"><span className='text-white'>Location</span>: {location}</p>
                            <div className='flex items-center'>
                                <p className="text-xl font-mono font-semibold text-accent mr-2"><span className='text-white'>Posted By:</span> {sellerName}</p>
                                <p>{isSellerVerified ? <GoVerified className='w-4 h-4 text-blue-600'></GoVerified> : <GoUnverified className='w-4 h-4 text-red-500'></GoUnverified>}</p>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary w-full btn-info text-white">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-4 bg-gray-300 text-lg'>
                    <div className='text-black w-3/5 text-justify'>
                        <p className='mb-2'>The owner <span className='font-mono font-semibold'>{sellerName}</span> has used <span className='font-mono font-semibold'>{name}</span> for <span className='font-mono font-semibold'>{usedYears}</span> years.
                            The Original price was <span className='font-mono font-semibold'>${originalPrice}</span>.
                        </p>
                        <p><span className='font-mono font-semibold'>Product Details:</span> {description}</p>
                    </div>
                    <div className='w-2/5 text-black flex flex-col px-5'>
                        <label htmlFor="seller-modal" className='btn btn-secondary mb-2 text-white'>Contact Seller</label>
                        <button onClick={() => handleNavigateToCategory(category)} className='btn btn-secondary text-white'>Explore Other Products in this Category</button>
                    </div>
                    {
                        <ContactSellerModal name={name} phone={phone} sellerEmail={sellerEmail} sellerName={sellerName}></ContactSellerModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertisedProductDetails;