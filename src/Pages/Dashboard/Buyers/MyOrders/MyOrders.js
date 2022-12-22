import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://rangefinder-server.vercel.app/my-orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <div>
                <h3 className='text-4xl font-mono mt-10 mb-5 font-semibold text-white'>These are the products in your cart!</h3>
                <div>
                    {
                        orders.length ? '' : <button className="btn loading bg-black">loading</button>
                    }
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Seller</th>
                                <th>Meeting Place</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => <tr className='text-black' key={order._id} >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-20 h-16">
                                                <img src={order.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.productName}</div>
                                            <div className="text-sm font-semibold">Price: ${order.productPrice}</div>
                                            <div className="text-sm font-semibold">Condition: {order.productCondition}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-sm font-semibold'>
                                    <p>Name: {order.sellerName}</p>
                                    <p>Contact: {order.sellerPhone}</p>
                                    <p>Email: {order.sellerEmail}</p>
                                    <p>Location: {order.productLocation}</p>
                                </td>
                                <td>
                                    <p className='text-sm font-semibold'>Meeting Place: {order.meetingPlace}</p>
                                    <p className='text-sm font-semibold'>The Seller can contact you by:</p>
                                    <ol className='list-disc ml-7'>
                                        <li className='text-xs font-semibold'>Phone: {order.buyerPhone}</li>
                                        <li className='text-xs font-semibold'>Email: {order.buyerEmail}</li>
                                    </ol>
                                </td>
                                <th>
                                    <div className='grid grid-cols-1 gap-3'>
                                        {
                                            order.availability === 'sold' ?
                                                <button className='btn btn-secondary btn-xs text-white disabled w-28'>Paid</button>
                                                :
                                                <Link to={`/payment/${order.productID}`}><button className="btn btn-info text-white btn-xs w-28">Pay Now</button></Link>
                                        }
                                        <button className="btn btn-error text-white btn-xs w-28">Remove</button>
                                    </div>
                                </th>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;