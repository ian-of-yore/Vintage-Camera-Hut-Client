import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const product = useLoaderData();

    return (
        <div className='min-h-screen flex justify-center mt-10'>
            <div>
                <h3 className='font-semibold font-mono text-3xl text-black'>Payment for <span className='text-orange-600'>{product.name}</span></h3>
                <p className='text-black text-xl font-semibold'>Pay <span className='text-orange-700'>${product.resellPrice}</span> before someone else seals the deal!</p>
                <div className='w-96 bg-secondary p-10 mt-10 ml-14'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            product={product}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;