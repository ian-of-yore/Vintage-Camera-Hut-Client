import React from 'react';
import { useSellerVerified } from '../../../hooks/useSellerVerified';

const ContactSellerModal = ({ name, phone, sellerEmail, sellerName }) => {
    const [isSellerVerified] = useSellerVerified(sellerEmail);

    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="seller-modal" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl font-mono mb-3">Product: {name}</h3>
                    <p className='text-left pl-10 text-lg underline font-semibold'>Seller Informations:</p>
                    <p className='text-left pl-10'>Name: {sellerName}</p>
                    <p className='text-left pl-10'>Email: {sellerEmail}</p>
                    <p className='text-left pl-10'>Phone: {phone}</p>
                    <p className='text-left pl-10 font-mono'>{isSellerVerified ? 'Seller is Verified' : 'Seller is not Verified'}</p>
                    <div className="modal-action mt-0">
                        <label htmlFor="seller-modal" className="btn btn-secondary btn-sm text-white">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSellerModal;