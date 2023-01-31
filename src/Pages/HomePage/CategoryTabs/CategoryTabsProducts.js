import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiPriceTag } from 'react-icons/gi';
import { SlLocationPin } from 'react-icons/sl';

const CategoryTabsProducts = ({ category }) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://rangefinder-server.vercel.app/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [category])

    // console.log(products)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2999, min: 1320 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1319, min: 960 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 959, min: 668 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 668, min: 0 },
            items: 1
        }
    };

    return (
        <div className='pt-5' style={{ color: '#cccccc' }}>
            <div>
                {
                    products.length ? <></> : <div className='h-40 flex justify-center items-center'><button className="btn btn-square loading bg-stone-900 rounded-full"></button></div>
                }
            </div>
            {
                products.length && <div className='xs:px-10 sm:px-0 md:px-0'>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        swipeable={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        arrows={true}
                    >
                        {
                            products.map(product => <Link to={`/product/${product._id}`} key={product._id}>
                                <div className="card rounded-lg card-compact bg-gray-900 shadow-xl mx-0 sm:mx-4 md:mx-4 lg:mx-2 border-b-4 border-indigo-500">
                                    <figure><img src={product.img} alt="Shoes" className='h-72 sm:h-60 md:h-52 lg:h-52 w-full' /></figure>
                                    <div className="card-body border-x-2 border-indigo-500">
                                        <h2 className='card-title'>{product.name}</h2>
                                        <div className='flex justify-start items-center'>
                                            <GiPriceTag className='w-5 h-5 mr-1'></GiPriceTag>
                                            <p className='text-left text-base font-semibold text-white'>{product.resellPrice}$</p>
                                        </div>
                                        <div className='flex justify-start items-center'>
                                            <SlLocationPin className='w-5 h-5 mr-1'></SlLocationPin>
                                            <p className='text-left text-base'>{product.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </Carousel>
                    <div className='text-center'>
                        <Link to={`category/${category}`} className='btn bg-stone-900 text-white mt-5 btn-wide hover:bg-gray-900'>See All</Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default CategoryTabsProducts;