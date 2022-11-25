import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: Products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-products?email=${user?.email}`, {
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            });
            const data = await res.json();
            return data;
        }
    })

    const handleAdvertise = (product) => {
        const url = `http://localhost:5000/my-products/${product}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Product is live for advertisement!');
                    refetch();
                }
            })
    }

    const handleDeleteProduct = (product) => {
        const url = `http://localhost:5000/my-products/${product}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(deleteProduct => {
                if (deleteProduct.deletedCount > 0) {
                    toast.success('Product Deleted!');
                    refetch();
                }
            })
    }

    return (
        <div className='mt-10'>
            <div className="overflow-x-auto w-full">
                <table className="table w-11/12 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Seller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            Products.map((product, index) => <tr key={product._id} >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded-xl w-20 h-20">
                                                <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-sm">{product.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {`Original price: ${product.originalPrice}`}
                                    <br />
                                    {`Asking price: ${product.resellPrice}`}
                                    <br />
                                    {`Conditon: ${product.condition}`}
                                </td>
                                <td>
                                    {`Location: ${product.location}`}
                                    <br />
                                    {`Contact: ${product.phone}`}
                                </td>
                                <th className='grid grid-cols-1 gap-2'>
                                    {
                                        product?.status === 'Advertised' ?
                                            <button className="btn btn-secondary btn-xs cursor-not-allowed">Already Advertised</button>
                                            :
                                            <button onClick={() => handleAdvertise(product._id)} className="btn btn-secondary btn-xs">Click to Advertise</button>
                                    }
                                    <button className="btn btn-secondary btn-xs">Update</button>
                                    <button onClick={() => handleDeleteProduct(product._id)} className="btn btn-error btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;