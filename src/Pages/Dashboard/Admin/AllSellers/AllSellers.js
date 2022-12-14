import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://rangefinder-server.vercel.app/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleVerifySeller = (seller) => {
        fetch(`https://rangefinder-server.vercel.app/sellers/verify/${seller}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller Verified');
                    refetch();
                }
            })
    }

    const handleDeleteSeller = (seller) => {
        const confirm = window.confirm('Want to delete this seller?');
        if (confirm) {
            const url = `https://rangefinder-server.vercel.app/sellers/delete/${seller}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.error('Seller Deleted');
                        refetch();
                    }

                })
        }
    }

    return (
        <div>
            <div>
                {
                    sellers.length ? '' : <button className="btn loading bg-black">loading</button>
                }
            </div>
            <div>
                {
                    sellers.length && <div className='mt-10 font-semibold text-xl'>
                        <h3 className='text-4xl font-serif font-semibold text-center text-white my-10'>All the listed sellers of this website</h3>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-11/12 mx-auto">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-black'>
                                    {
                                        sellers.map((seller, index) => <tr key={seller._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="rounded-xl w-16 h-16">
                                                        <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {seller.displayName}
                                            </td>
                                            <td>{seller.email}</td>
                                            <td>{seller.role}</td>
                                            <td>
                                                {
                                                    seller?.status === 'Verified' ?
                                                        <button className='btn btn-accent text-gray-100 disabled w-36 cursor-not-allowed'>Verified</button>
                                                        :
                                                        <button onClick={() => handleVerifySeller(seller._id)} className='btn btn-info w-36'>Click to verify</button>
                                                }
                                            </td>
                                            <td><button onClick={() => handleDeleteSeller(seller._id)} className='btn-error btn'>Remove</button></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default AllSellers;