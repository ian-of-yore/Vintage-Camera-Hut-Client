import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReportedItems = () => {
    const [reportedItems, setReportedItems] = useState([]);

    useEffect(() => {
        const getReportedItems = async () => {
            const url = `http://localhost:5000/products/reported`;
            const res = await axios.get(url, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('jwt-token')}`
                },
            });
            setReportedItems(res.data);
        };

        getReportedItems();
    }, [])

    console.log(reportedItems)


    return (
        <div>
            <h3 className='text-3xl font-mono font-semibold text-center my-10 text-white'>The buyers have reported these follwoing items</h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Seller Info</th>
                            <th>Reported User</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>
                        {
                            reportedItems.map((item, index) => <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-16 h-16">
                                                <img src={item.productImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="font-bold">{item.productName}</div>
                                    </div>
                                </td>
                                <td className='font-semibold'>
                                    <p>{item.sellerName}</p>
                                    <p>{item.sellerEmail}</p>
                                    <p>{item.phone}</p>
                                </td>
                                <td className='font-semibold'>
                                    <p>{item.phone}</p>
                                    <p>{item.reportedUserEmail}</p>
                                </td>
                                <th className='grid grid-cols-1 gap-2'>
                                    <button className="btn btn-error btn-sm">Remove</button>
                                    <button className="btn bg-emerald-900 btn-sm text-white">Ignore</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;