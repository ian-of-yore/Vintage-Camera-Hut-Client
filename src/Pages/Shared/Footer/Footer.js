import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { toast } from 'react-hot-toast';
import { TfiInstagram, TfiTwitterAlt, } from "react-icons/tfi";
import { SiYoutube, SiFacebook } from "react-icons/si";
import logo from '../../../assests/websiteLogo.jpg';

const Footer = () => {

    const handleSubscribe = (event) => {
        event.preventDefault();
        toast.success("You've subscribed to our newsletter!")
    }

    return (
        <div className='md:h-96 bg-gray-900 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 border-t-2 border-t-gray-900 border-r-2 border-r-gray-900'>
                <div className='h-52 sm:h-60 col-span-2'>
                    <div className='w-11/12 mx-auto text-left'>
                        <h1 className='text-4xl font-serif pt-8 pb-2'>Newsletter</h1>
                        <hr />
                        <form onSubmit={handleSubscribe} className='grid grid-cols-4 pt-3 gap-3'>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full h-12 col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3 text-black" required />
                            <button type="submit" className='btn h-10 col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1'>Subscribe</button>
                        </form>
                        <div className='flex justify-start items-center mt-5'>
                            <h1 className='text-2xl font-serif mr-4'>Follow Us </h1>
                            <div className='flex justify-start items-center'>
                                <SiFacebook className='h-6 w-6 mr-3'></SiFacebook>
                                <TfiInstagram className='h-6 w-6 mr-3'></TfiInstagram>
                                <TfiTwitterAlt className='h-6 w-6 mr-3'></TfiTwitterAlt>
                                <SiYoutube className='h-7 w-7'></SiYoutube>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:flex justify-center items-center h-52 sm:h-60 col-span-3 px-4 sm:px-8 md:px-0'>
                    <div className='sm:w-1/2 lg:w-2/5 text-white text-left lg:pb-4 mb-4 sm:mb-0'>
                        <h1 className='font-serif text-left mb-2 text-4xl'>Contact Us</h1>
                        <p>Jacob Van Lennepkade 304, 1053 NG Amsterdam, North Holland Netherlands</p>
                        <p><span className='text-lg font-serif'>Phone:</span> +9823870129</p>
                        <p><span className='text-lg font-serif'>Email:</span> helpline@vintagecamerahut.com</p>
                    </div>
                    <MapContainer
                        center={[52.297929660679664, 4.995962826311258]}
                        zoom={10}
                        scrollWheelZoom={false}
                        className='sm:w-1/2 lg:w-3/5 h-full'
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[52.29800839624283, 4.945322723074836]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <footer className="footer p-10 bg-gray-900 grid grid-cols-2 md:grid-cols-4 items-center pt-48 sm:pt-10">
                <div className='w-full lg:flex lg:items-center md:justify-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-xl">
                            <img src={logo} alt='' />
                        </div>
                    </div>
                    <div className='text-left'>
                        <p className='font-serif'>Vintage Camera Hut</p>
                        <p className='font-serif'>For all of Novice, Pro & Veterans</p>
                    </div>
                </div>
                <div className='w-full md:justify-center'>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover ">Branding</Link>
                    <Link className="link link-hover ">Design</Link>
                    <Link className="link link-hover ">Marketing</Link>
                </div>
                <div className='w-full md:justify-center'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div className='w-full md:justify-center'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;