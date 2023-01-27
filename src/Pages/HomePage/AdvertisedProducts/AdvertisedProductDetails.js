import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GoUnverified, GoVerified } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router-dom';
import { useSellerVerified } from '../../../hooks/useSellerVerified';
import { useQuery } from '@tanstack/react-query';
import { GiPriceTag } from 'react-icons/gi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AdvertisedProductDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, img, name, category, condition, description, location,
        originalPrice, phone, postTime, resellPrice,
        sellerEmail, sellerName, usedYears, purchaseYear } = useLoaderData();

    const [isSellerVerified] = useSellerVerified(sellerEmail);

    const timeDiff = (postTime) => {
        const presentTime = new Date();
        const previousTime = new Date(postTime);

        const diffMs = (presentTime - previousTime) // diff in milliseconds
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        const diffHours = Math.floor((diffMs % 86400000) / 3600000); // hours
        const diffDays = Math.floor(diffMs / 86400000); // days

        // console.log('days', diffDays, 'hours', diffHours, 'mins', diffMins)
        return { diffDays, diffHours, diffMins }
    }
    const { diffMins, diffHours, diffDays } = timeDiff(postTime);

    const { data: allProductsInCategory = [], } = useQuery({
        queryKey: ['advertised-products'],
        queryFn: async () => {
            const res = await fetch(`https://rangefinder-server.vercel.app/category/${category}`);
            const data = await res.json();
            return data;
        }
    })
    const similarProducts = allProductsInCategory.filter(product => product._id !== _id);

    const handleAddToWishlist = (id) => {
        if (user?.email) {
            toast.success('Product added to wishlist');
        } else {
            toast.error('You need to login to perform this action')
        }
    }

    const handleReportProduct = (id) => {
        if (user?.email) {
            toast.success('Product has been reported to Admin');
        } else {
            toast.error('You need to login to perform this action')
        }
    }

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

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className='relative pt-4'>
                <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}><BsFillArrowLeftCircleFill className='w-8 h-8 text-gray-800'></BsFillArrowLeftCircleFill></button>
                <button onClick={() => next()}><BsFillArrowRightCircleFill className='ml-6 w-8 h-8 text-gray-800'></BsFillArrowRightCircleFill></button>
            </div>
        );
    };

    return (
        <div className='w-11/12 mx-auto lg:w-10/12 min-h-screen'>
            <div className="card md:card-side shadow-xl mt-10 rounded-none lg:w-10/12 mx-auto">
                <figure className='md:w-3/5'><img src={img} alt="Album" className='h-80 sm:h-[450px] md:h-96' /></figure>
                <div className="card-body text-black md:w-2/5">
                    <div className='flex items-center justify-between mb-2'>
                        <h2 className="card-title">{name}</h2>
                        <div className="dropdown dropdown-right flex items-center">
                            <label tabIndex={0}><BsThreeDotsVertical className='w-4 h-4 font-bold text-black'></BsThreeDotsVertical></label>
                            <ul tabIndex={0} className="dropdown-content menu shadow w-20">
                                <button onClick={() => handleAddToWishlist(_id)} className='btn-info btn-sm rounded-lg text-white'>Wishlist</button>
                                <button onClick={() => handleReportProduct(_id)} className='btn-error btn-sm rounded-lg mt-2 text-white'>Report</button>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-start items-center'>
                        <GiPriceTag className='w-5 h-5 mr-1'></GiPriceTag>
                        <p className='text-left text-lg font-semibold text-rose-700'>${resellPrice}</p>
                    </div>
                    <div className='flex justify-start items-center'>
                        <SlLocationPin className='w-4 h-4 mr-1'></SlLocationPin>
                        <p className='text-left text-base'>{location}</p>
                    </div>
                    <p className='text-justify'>The product is in {condition} condition. It has been in the possesion of the seller for {usedYears} years and the seller status is {isSellerVerified ? 'verified' : 'not verified'}</p>
                    <div className='flex justify-start items-center pb-3'>
                        <AiOutlineFieldTime className='w-5 h-5 mr-1'></AiOutlineFieldTime>
                        <p className='text-base text-left'>
                            {
                                diffDays > 0 && ` ${diffDays} Days, `
                            }
                            {
                                diffHours > 0 && `${diffHours} Hours `
                            }
                            {
                                diffMins > 0 && `${diffMins} Minutes ago`
                            }
                        </p>
                    </div>
                    <div className="card-actions">
                        {
                            user?.email ?
                                <Link to={`/orderProduct/${_id}`} className="w-full"><button className='btn btn-secondary text-white btn-sm w-full'>Order Now</button></Link>
                                :
                                <Link to='/login' className="w-full"><button className='btn btn-secondary text-white btn-sm w-full'>Login to place order</button></Link>
                        }
                    </div>
                </div>
            </div>
            <div className='my-10 text-black text-left'>
                <Tabs>
                    <TabList>
                        <Tab><p className='font-serif text-lg'>Description</p></Tab>
                        <Tab><p className='font-serif text-lg'>Seller Information</p></Tab>
                    </TabList>
                    <TabPanel>
                        <div className='ml-2 sm:ml-5'>
                            <h3 className='text-lg font-sans mt-5 mb-1 underline'>Introduction</h3>
                            <p>{description}</p>
                            <h3 className='text-lg font-sans mt-5 mb-1 underline'>Key Points</h3>
                            <ul className='list-disc ml-10'>
                                <li>Product Category: <span className='font-mono'>{category}</span></li>
                                <li>The product is in <span className='font-mono'>{condition}</span> condition.</li>
                                <li>The owner <span className='font-mono'>{sellerName}</span> purchased it in <span className='font-mono'>{purchaseYear}</span> and has used it for <span className='font-mono'>{usedYears}</span> years.</li>
                                <li>The price at that time was <span className='font-mono'>${originalPrice}</span> & <span className='font-mono'>{sellerName}</span> is asking for <span className='font-mono'>${resellPrice}</span> at the moment.</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='ml-2 sm:ml-5'>
                            <div className="flex items-center space-x-3">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                        <span className="text-3xl">{sellerName.slice(0, 1)}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center'>
                                        <p className='text-black text-lg font-semibold mr-2'>{sellerName}</p>
                                        <p>{isSellerVerified ? <GoVerified className='w-4 h-4 text-blue-600'></GoVerified> : <GoUnverified className='w-4 h-4 text-red-500'></GoUnverified>}</p>
                                    </div>
                                    <div className="font-mono font-semibold">{location}</div>
                                </div>
                            </div>
                            <div className="collapse w-60">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium pl-0">
                                    <button className='btn btn-sm bg-gray-800 text-white w-full'>Contact Seller</button>
                                </div>
                                <div className="collapse-content">
                                    <p><span className='font-semibold'>Email:</span> {sellerEmail}</p>
                                    <p><span className='font-semibold'>Phone:</span> +{phone}</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className='mb-10 text-black'>
                <h1 className='text-2xl font-serif text-left mb-4'>Releted Products</h1>
                {
                    similarProducts.length && <div className='xs:px-10 sm:px-0 md:px-0'>
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            swipeable={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            arrows={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<ButtonGroup />}
                        >
                            {
                                similarProducts.map(product => <Link to={`/product/${product._id}`} key={product._id}>
                                    <div className="card rounded-lg card-compact bg-gray-200 shadow-xl mx-0 sm:mx-4 md:mx-4 lg:mx-2 border-b-4 border-indigo-500">
                                        <figure><img src={product.img} alt="Shoes" className='h-72 sm:h-60 md:h-52 lg:h-52 w-full' /></figure>
                                        <div className="card-body border-x-2 border-indigo-500">
                                            <h2 className='card-title'>{product.name}</h2>
                                            <div className='flex justify-start items-center'>
                                                <GiPriceTag className='w-5 h-5 mr-1'></GiPriceTag>
                                                <p className='text-left text-base font-semibold text-black'>{product.resellPrice}$</p>
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
                    </div>
                }
            </div>
        </div>
    );
};

export default AdvertisedProductDetails;