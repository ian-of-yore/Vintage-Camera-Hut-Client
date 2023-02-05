import React from 'react';
import bg from '../../../assests/ReviewBackground.jfif';
import bg2 from '../../../assests/staticBackground02.jfif';
import bg3 from '../../../assests/staticBackground03.jfif';
import bg4 from '../../../assests/staticBackground04.jfif';
import { staticReviews } from './StaticReviewData';


const StaticReviews = () => {
    const reviews = staticReviews;
    console.log(reviews);

    return (
        <div className='w-8/12 mx-auto flex justify-center'>
            <div className="carousel carousel-vertical rounded-box h-80 sm:h-[400px] md:h-[480px] lg:h-[550px]">
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <div class="relative">
                        <img src={bg} alt='' style={{ opacity: .9 }} />
                        <div class="absolute top-10 left-5">
                            <p className='text-lg font-semibold text-gray-900 w-11/12 mx-auto text-justify'>
                                "Received first class service from the Vintage Camera Hut when buying a point and shoot camera for
                                my daughter's Christmas. Their expert advice was most welcome and their customer service of the
                                highest standard. I would not hesitate to use them again or to recommend them. Thank you for all
                                your support."
                            </p>
                            <div className='flex justify-end pr-10 pt-5'>
                                <div className="flex-col items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg font-serif text-stone-900">Tyler McGowan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-10">
                        <a href="#slide4" className="btn btn-circle bg-gray-900">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-gray-900">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div class="relative">
                        <img src={bg3} alt='' style={{ opacity: 1 }} />
                        <div class="absolute top-10 left-5">
                            <p className='text-lg font-semibold text-stone-900 w-11/12 mx-auto text-justify'>
                                "I have never been in the store but their customer service is WONDERFUL!!! I gave my niece a gift card
                                for her birthday in March. Last weekend her purse was stolen with the gift card in it.  I contacted them
                                on a Sunday via email and received a response. They looked into it and found that the gift card still had
                                value. They are transfering the balance and sending me a new gift card!  No one could do more than they have."
                            </p>
                            <div className='flex justify-end pr-10 pt-5'>
                                <div className="flex-col items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg font-serif text-gray-900">Melissa Menard</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/4">
                        <a href="#slide1" className="btn btn-circle bg-gray-900">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-gray-900">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div class="relative">
                        <img src={bg4} alt='' style={{ opacity: 1 }} />
                        <div class="absolute top-10 left-5">
                            <p className='text-lg font-semibold text-gray-900 w-11/12 mx-auto text-justify'>
                                "Excellent art supply store with great selection and prices. Very knowledgeable and helpful stuff will
                                advise customers to find what they need. Nice big space and very pleasant environment. It's one of the
                                last ones standing after so many art supply stores have closed."
                            </p>
                            <div className='flex justify-end pr-10 pt-5'>
                                <div className="flex-col items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg font-serif text-gray-900">Rozanna Yiannakis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/4">
                        <a href="#slide2" className="btn btn-circle bg-gray-900">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-gray-900">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div class="relative">
                        <img src={bg2} alt='' style={{ opacity: .9 }} />
                        <div class="absolute top-10 left-5">
                            <p className='text-lg font-semibold text-stone-900 w-11/12 mx-auto text-justify'>
                                "If you, like me, know nothing about custom framing, a word of caution- Blick does not give quotes without
                                an in person appointment, and had it not been a 50% off sale this week, our original plan for two diplomas
                                framed with custom colored mats would've cost over $1000. So just know what you're getting into. Apparently
                                the sale happens multiple times a year, so it's definitely worth waiting for."
                            </p>
                            <div className='flex justify-end pr-10 pt-3'>
                                <div className="flex-col items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div className="font-bold text-lg font-serif text-gray-900">Michael Sturm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/4">
                        <a href="#slide3" className="btn btn-circle bg-gray-900">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-gray-900">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaticReviews;