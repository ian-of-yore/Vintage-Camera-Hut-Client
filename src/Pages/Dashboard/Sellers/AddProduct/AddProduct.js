import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const AddProduct = () => {
    const imageBBKey = process.env.REACT_APP_imageBB;
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const productInfo = {
                        img: imgData.data.url,
                        name: data.name,
                        category: data.category,
                        condition: data.condition,
                        originalPrice: data.originalPrice,
                        resellPrice: data.resellPrice,
                        location: data.location,
                        purchaseYear: data.yearOfPurchase,
                        usedYears: data.yearOfUsed,
                        phone: data.sellerPhone,
                        description: data.description,
                        sellerName: user?.displayName,
                        sellerEmail: user?.email,
                    }

                    fetch('http://localhost:5000/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(productData => {
                            if (productData.acknowledged) {
                                toast.success('Product Added Successfully');
                                navigate('/dashboard/my-products')
                            }
                        })
                }
            })
    }




    return (
        <div className='mt-10'>
            <div className='w-10/12 mx-auto'>
                <h3 className='text-4xl font-mono mb-7 text-white'>Add a Product</h3>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='grid grid-cols-3 gap-3'>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Product Name</span> </label>
                            <input {...register('name')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Product Picture</span> </label>
                            <input {...register('img')} type="file" className="file-input file-input-bordered file-input-secondary w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Product Condition</span> </label>
                            <select {...register('condition')} className="select select-info w-full text-black h-10 mb-2">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Product Category</span> </label>
                            <select {...register('category')} className="select select-info w-full text-black h-10 mb-2">
                                <option>Point & Shoot</option>
                                <option>DSLR</option>
                                <option>Mirrorless</option>
                            </select>
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Original Price</span> </label>
                            <input {...register('originalPrice')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Your asking Price</span> </label>
                            <input {...register('resellPrice')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Your Location</span> </label>
                            <input {...register('location')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">The year you purchased this product</span> </label>
                            <input {...register('yearOfPurchase')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Total years in your possesion</span> </label>
                            <input {...register('yearOfUsed')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text text-black text-base font-semibold">Your Phone Number</span> </label>
                            <input {...register('sellerPhone')} type="text" className="input input-bordered w-full h-10 text-black" />
                        </div>
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-black text-base font-semibold">Say something about the product</span> </label>
                        <textarea {...register('description')} className="textarea textarea-bordered w-full text-black h-20"></textarea>
                    </div>
                    <input type="submit" className='btn btn-info w-full mt-5' value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;