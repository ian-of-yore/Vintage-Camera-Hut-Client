import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useSellerVerified } from '../../../hooks/useSellerVerified';
import BookingModal from '../../Dashboard/Buyers/BookingModal/BookingModal';
import { GoUnverified, GoVerified } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import toast from 'react-hot-toast';

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

    const handleAddToWishlist = (product) => {
        const wishListProduct = {
            productID: _id,
            productName: name,
            productImg: img,
            price: resellPrice,
            condition,
            sellerEmail,
            phone,
            sellerName,
            userEmail: user?.email,
            userName: user?.displayName
        }

        const url = `http://localhost:5000/products/wishlist`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify(wishListProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Added to wishlist')
                }
            })
    }

    const handleReportProduct = (product) => {
        const reportedProduct = {
            productID: _id,
            productName: name,
            productImg: img,
            sellerEmail,
            phone,
            sellerName,
            reportedUserEmail: user?.email,
            reportedUserName: user?.displayName
        }

        const url = `http://localhost:5000/products/reported`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify(reportedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error('Reported to Admin')
                }
            })
    }

    return (
        <div className='w-10/12 mx-auto md:h-96'>
            <div className="card md:card-side w-full h-full rounded-none shadow-xl">
                <figure className='w-full md:w-1/2'>
                    <img src={img} className='h-full md:h-full w-full' alt="Album" />
                </figure>
                <div className="w-full md:w-1/2 bg-secondary h-1/2 md:h-full">
                    <div className='p-5 text-accent h-5/6'>
                        <div className='flex items-center justify-between mb-2'>
                            <h2 className=" text-2xl font-mono font-semibold">{name}</h2>
                            <div className="dropdown dropdown-right flex items-center">
                                <label tabIndex={0}><BsThreeDotsVertical className='w-6 h-6 text-white'></BsThreeDotsVertical></label>
                                <ul tabIndex={0} className="dropdown-content menu shadow w-20">
                                    <button onClick={() => handleAddToWishlist(_id)} className='btn-info btn-sm rounded-lg text-white'>Wishlist</button>
                                    <button onClick={() => handleReportProduct(_id)} className='btn-error btn-sm rounded-lg mt-2 text-white'>Report</button>
                                </ul>
                            </div>
                        </div>
                        <h4 className='text-left'><span className='text-lg font-semibold'>Condition: </span><span className='text-white'>{condition}</span></h4>
                        <p className='text-white md:text-base text-left'>The original price of this Camera was <span className='text-accent text-lg'>${originalPrice}</span>, It has been
                            in the possesion of the seller for <span className='text-accent text-lg'>{usedYears}</span> years and the seller is asking for <span className='text-accent text-lg'>${resellPrice}</span> as its resell value</p>
                        <p className='text-left text-white text-sm'><span className='text-accent text-xl font-semibold '>Description:</span> {description.length > 200 ? description.slice(0, 200) + '...' : description}</p>
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
                                            diffHours > 0 && `${diffHours} Hours `
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