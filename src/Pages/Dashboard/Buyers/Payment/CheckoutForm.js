import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';


const CheckoutForm = ({ product }) => {
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [cardTransactionID, setCardTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const { _id, resellPrice, sellerEmail } = product;
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const paymentInfo = {
            productId: _id,
            price: resellPrice,
            seller: sellerEmail,
            buyer: user?.email
        }
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            },
            body: JSON.stringify(paymentInfo),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [_id, resellPrice, sellerEmail, user?.email]);


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
        }
        else {
            setCardError('')
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            // saving payment information to the database
            const transactionInfo = {
                price: resellPrice,
                sellerEmail,
                productId: _id,
                buyerEmail: user?.email,
                transactionId: paymentIntent.id,
            }

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                },
                body: JSON.stringify(transactionInfo),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setCardSuccess('Congratulations, Payment successful!');
                        setCardTransactionID(paymentIntent.id);
                    }
                })
        }

        setProcessing(false);

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
            <button className='btn-accent btn btn-sm w-full mt-8' type="submit" disabled={!stripe || !clientSecret || processing}>Pay</button>
            {
                cardError && <p className='text-red-700 font-semibold mt-4 border-2 bg-white rounded-lg'>{cardError}</p>
            }
            {
                cardSuccess && <>
                    <p className='text-sky-700 font-semibold mt-4 border-2 bg-white rounded-lg'>{cardSuccess}</p>
                    <p className='text-yellow-700 font-semibold text-xs mt-4 border-2 bg-white rounded-lg'>Transaction ID: {cardTransactionID}</p>
                </>
            }
        </form>
    );
};

export default CheckoutForm;