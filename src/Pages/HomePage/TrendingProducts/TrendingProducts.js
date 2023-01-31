import React, { useState } from 'react';
import { useEffect } from 'react';

const TrendingProducts = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('https://i.ibb.co/c2tSwgB/1-k1000-at-park.jpg');

    useEffect(() => {
        fetch('https://rangefinder-server.vercel.app/advertised-products')
            .then(res => res.json())
            .then(data => setTrendingProducts(data.slice(18, 27)))
    }, []);


    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='my-20 w-11/12 mx-auto'>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-full h-px my-8 border-2 border-indigo-900" />
                    <span className="absolute px-3 text-3xl sm:text-4xl font-serif text-black -translate-x-1/2 bg-white right-0">Featured Products</span>
                </div>
                <p className='text-black text-justify w-11/12 mx-auto mb-10'>
                    Vintage Camera Hut offer an extensive range of used cameras, used lenses and second-hand photography accessories
                    from the biggest brands including Canon, Leica, Nikon, Fujifilm and many more. Buy with complete confidence
                    and peace of mind, as our sellers are quality-checked and verified on a regular basis. Buy
                    used cameras from our huge range today and discover your perfect DSLR, mirrorless, compact and even used film
                    cameras for sale, complete with a comprehensive swift. We have options for every
                    interchangeable lens system, compatible with DSLR, mirrorless and medium format cameras.
                </p>
                <div>
                    {
                        trendingProducts.length ? <></> : <div className='h-40 flex justify-center items-center'><button className="btn btn-square loading bg-stone-900 rounded-full"></button></div>
                    }
                </div>
                <div className=''>
                    {
                        trendingProducts.length &&
                        <div className="grid lg:grid-cols-9 lg:gap-5">
                            <div className='lg:col-span-5 mb-8 lg:mb-0'>
                                <img src={selectedProduct} alt="Selected" className="w-full h-80 sm:h-96 md:h-[490px] rounded-lg" />
                            </div>
                            <div className='lg:col-span-4 lg:py-6 xl:py-0'>
                                <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-3 gap-4'>
                                    {trendingProducts.map((product, index) => (
                                        <div className='w-full py-1' key={index}>
                                            <img
                                                style={{ border: selectedProduct === product.img ? "4px solid black" : "" }}
                                                key={index}
                                                src={product.img}
                                                alt="dog"
                                                onClick={() => setSelectedProduct(product.img)}
                                                className='w-full h-20 sm:h-28 md:h-32 xl:h-36 rounded-xl'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;