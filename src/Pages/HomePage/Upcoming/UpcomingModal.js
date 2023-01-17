import React from 'react';
import { toast } from 'react-hot-toast';

const UpcomingModal = ({ setModalOpen }) => {


    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.user_name.value;
        const email = event.target.user_email.value;
        console.log(name, email)
        setModalOpen(false)
        toast.success('Successfully Subscribed')
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit} className="card-body bg-gray-700 mx-96 rounded-2xl">
                    <h2 className='text-2xl font-serif'>Subscribe to our newsletter <br /> We will let you know if films are restocked</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered text-black" name="user_name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered text-black" name="user_email" required />
                    </div>
                    <div className='grid grid-cols-4 gap-4 items-center mt-3'>
                        <div className="modal-action mt-0 col-span-1">
                            <label htmlFor="my-modal" className="btn w-full">Close</label>
                        </div>
                        <div className='col-span-3'>
                            <button type="submit" className='btn w-full'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpcomingModal;