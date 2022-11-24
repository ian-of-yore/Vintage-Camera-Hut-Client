import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = ['Point & Shoot', 'Mirrorless', 'DSLR'];

    return (
        <div>
            <h3 className='text-3xl text-center text-black font-semibold font-serif my-10'>Here are the three categories to buy from</h3>
            {
                categories.map((category, index) => <Link key={index} to={`category/${category}`}><button className="btn bg-orange-500 w-72 h-24 mb-4 md:mb-0 mr-10 text-3xl">{category}</button></Link>)
            }
        </div>
    );
};

export default Categories;