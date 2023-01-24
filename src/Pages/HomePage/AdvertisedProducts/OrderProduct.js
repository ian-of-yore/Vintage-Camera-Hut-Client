import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const OrderProduct = () => {
    const productDetails = useLoaderData();
    const { name, _id, img, resellPrice, condition, location, sellerName, sellerEmail, phone } = productDetails;
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);

    const handleOrder = (data) => {
        const order = {
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            buyerPhone: data.buyerPhone,
            meetingPlace: data.meetingPlace,
            productID: _id,
            productImg: img,
            productName: name,
            productPrice: resellPrice,
            productCondition: condition,
            productLocation: location,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            sellerPhone: phone
        };

        fetch('https://rangefinder-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(orderData => {
                if (orderData.acknowledged) {
                    toast.success('Order Placed Successfully!')
                }
            })
    }

    return (
        <div className='text-white bg-secondary min-h-screen'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-serif mb-5 pt-28 w-11/12 sm:w-10/12 md:w-11/12 lg:w-9/12 mx-auto'>Place your order for <span className='underline'>{name}</span></h1>
            <form onSubmit={handleSubmit(handleOrder)} className='w-10/12 sm:w-8/12 md:w-11/12 lg:w-8/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Your Name</span> </label>
                        <input {...register('buyerName')} type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full h-10 text-black" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Your Email</span> </label>
                        <input {...register('buyerEmail')} type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full h-10 text-black" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Product Name</span> </label>
                        <input {...register('productName')} type="text" defaultValue={name} readOnly className="input input-bordered w-full h-10 text-black" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Product Price</span> </label>
                        <input {...register('productPrice')} type="text" defaultValue={`$${resellPrice}`} readOnly className="input input-bordered w-full h-10 text-black" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Your Contact Number</span> </label>
                        <input {...register('buyerPhone')} type="text" className="input input-bordered w-full h-10 text-black" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-white text-base font-semibold">Your Preffered Meeting Place</span> </label>
                        <input {...register('meetingPlace')} type="text" className="input input-bordered w-full h-10 text-black" />
                    </div>
                </div>
                <div className='pb-20 md:mb-0'>
                    <input type="submit" className='btn btn-info text-white text-lg font-semibold font-serif w-full md:w-1/2 mx-auto mt-8' value="Add To Cart" />
                </div>
            </form>
        </div>
    );
};

export default OrderProduct;