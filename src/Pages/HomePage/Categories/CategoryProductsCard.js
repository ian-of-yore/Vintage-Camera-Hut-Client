import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useSellerVerified } from '../../../hooks/useSellerVerified';
import BookingModal from '../../Dashboard/Buyers/BookingModal/BookingModal';
import { GoUnverified, GoVerified } from "react-icons/go";

const CategoryProductsCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { _id, img, name, condition, description, location, originalPrice, resellPrice, sellerName, usedYears, phone, sellerEmail, postTime } = product;
    const [buyNow, setBuyNow] = useState(false);
    const [isSellerVerified] = useSellerVerified(sellerEmail);

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

    const handleBookingModal = (product) => {
        setBuyNow(true);
    }

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
                                    <div className='flex items-center'>
                                        <p className='text-white text-lg font-semibold mr-2'>{sellerName}</p>
                                        <p>{isSellerVerified ? <GoVerified className='w-4 h-4 text-blue-600'></GoVerified> : <GoUnverified className='w-4 h-4 text-red-500'></GoUnverified>}</p>
                                    </div>
                                    <p className='text-white'>{location}</p>
                                    <p className='text-white'>Contact: {phone}</p>
                                </div>
                                <div>
                                    <p className='text-lg text-accent font-mono'>
                                        {
                                            diffDays > 0 && `${diffDays} Days, `
                                        }
                                        {
                                            diffHours > 0 && `${diffHours} Hours &`
                                        }
                                        {
                                            diffMins > 0 && `${diffMins} Minutes ago`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label onClick={() => handleBookingModal(product)} htmlFor="booking-modal" className="btn btn-sm btn-info rounded-none w-full h-12 mt-4">Order Now</label>
                </div>
            </div>
            {
                buyNow && <BookingModal product={product} user={user} setBuyNow={setBuyNow}></BookingModal>
            }
        </div>
    );
};

export default CategoryProductsCard;