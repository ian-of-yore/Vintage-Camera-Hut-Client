import React from 'react';
import { Link } from 'react-router-dom';
import pointnshoot from '../../../assests/point&shoot.jpg';
import mirrorless from '../../../assests/mirrorless.png';
import dslr from '../../../assests/dslr.jpg';
import action from '../../../assests/actionCamera.jfif';
import mediumFormat from '../../../assests/mediumFormat.jpg';
import film from '../../../assests/filmCamera.jfif';


const Categories = () => {
    // const categories = ['Point & Shoot', 'Mirrorless', 'DSLR'];
    const categories = [
        { name: 'Point & Shoot', img: pointnshoot },
        { name: 'Mirrorless', img: mirrorless },
        { name: 'DSLR', img: dslr },
        { name: 'Action', img: action },
        { name: 'Medium Format', img: mediumFormat },
        { name: 'Film', img: film },
    ]

    return (
        <div className='w-11/12 mx-auto lg:w-10/12'>
            {/* <div>
                <h3 className='text-3xl text-center text-black font-semibold font-serif my-10'>Here are the three categories to buy from</h3>
                {
                    categories.map((category, index) => <Link key={index} to={`category/${category}`}><button className="btn bg-orange-500 w-72 h-24 mb-4 md:mb-0 mr-10 text-3xl">{category}</button></Link>)
                }
            </div> */}
            <h2 className='font-serif text-3xl text-center text-secondary mb-6'>Explore Our Collections!</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    categories.map((category, index) => <div key={index}>
                        <Link to={`category/${category.name}`}>
                            <div className='h-96 bg-slate-800'>
                                <div className='h-80 '>
                                    <img src={category.img} alt="" className='w-full h-full pt-16' />
                                </div>
                                <div className='h-16 bg-slate-800'>
                                    <h2 className='text-4xl pt-2 font-mono'>{category.name}</h2>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;