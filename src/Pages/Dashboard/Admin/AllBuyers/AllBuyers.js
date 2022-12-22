import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://rangefinder-server.vercel.app/buyers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer = (buyer) => {
        const confirm = window.confirm('Are you sure you want to delete this buyer?');
        if (confirm) {
            const url = `https://rangefinder-server.vercel.app/buyers/delete/${buyer}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.error('Buyer Deleted');
                        refetch();
                    }

                })
        }
    }


    return (
        <div>
            <div>
                {
                    buyers.length ? '' : <button className="btn loading bg-black">loading</button>
                }
            </div>
            <div>
                {
                    buyers.length && <div className='mt-10 font-semibold text-xl'>
                        <h3 className='text-4xl font-serif font-semibold text-center text-white my-10'>All the listed buyers of this website</h3>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-11/12 mx-auto">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Avatar</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-black'>
                                    {
                                        buyers.map((buyer, index) => <tr key={buyer._id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="avatar">
                                                    <div className="rounded-xl w-16 h-16">
                                                        <img src={buyer.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {buyer.displayName}
                                            </td>
                                            <td>{buyer.email}</td>
                                            <td>{buyer.role}</td>
                                            <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn-error btn'>Remove</button></td>
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

export default AllBuyers;