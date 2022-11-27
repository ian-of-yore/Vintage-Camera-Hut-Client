import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';


const CheckoutForm = () => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message);
            toast.error(cardError)

        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#FFFFFF',
                            '::placeholder': {
                                color: '#FFFFFF',
                            },
                        },
                        invalid: {
                            color: '#CF0A0A',
                        },
                    },
                }}
            />
            <button className='btn-accent btn btn-sm w-full mt-8' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;