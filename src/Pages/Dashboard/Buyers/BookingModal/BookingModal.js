import React from 'react';
import { useForm } from 'react-hook-form';

const BookingModal = ({ product, user, setBuyNow }) => {
    const { register, handleSubmit } = useForm();

    const handleOrder = (data) => {
        console.log('eije ei product the kinmu', product);
        console.log('form data', data);
        setBuyNow(false)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(handleOrder)} className='bg-secondary w-[600px] p-5'>
                    <div className='grid grid-cols-2 gap-3'>
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
                            <input {...register('productName')} type="text" defaultValue={product.name} readOnly className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-white text-base font-semibold">Product Price</span> </label>
                            <input {...register('productPrice')} type="text" defaultValue={`$${product.resellPrice}`} readOnly className="input input-bordered w-full h-10 text-black" />
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
                    <div className='flex justify-between items-center'>
                        <div className="modal-action">
                            <label htmlFor="booking-modal" className="btn btn-error w-20">Close</label>
                        </div>
                        <input type="submit" className='btn btn-info text-white text-lg font-semibold font-serif w-40 mt-5' value="Add To Cart" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;