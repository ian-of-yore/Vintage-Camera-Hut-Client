import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('BlogData.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, []);

    return (
        <div className='flex justify-center min-h-screen my-20 w-11/12 mx-auto lg:w-10/12'>
            <div>
                <div>
                    <h1 className='text-xl sm:text-4xl font-semibold text-gray-900'>Vintage Camera Hut Original Content</h1>
                    <p className='text-base sm:text-2xl font-semibold text-gray-900 mt-2 sm:mt-5'>Get inspired and learn about the latest in photo and video</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    {
                        articles.length && articles.map(article => <div key={article.id} className="card card-compact rounded-none shadow-xl">
                            <figure className='sm:h-80 md:h-60'><img src={article.img} alt="Shoes" className='h-full w-full' /></figure>
                            <div className="card-body text-gray-900 text-left sm:h-48 md:h-72 lg:h-60">
                                <p className='font-sans font-semibold'>{article.date}</p>
                                <h2 className="text-2xl font-serif">{article.title}</h2>
                                <div>{article.description.length > 200 ?
                                    <div>
                                        <p>{article.description.slice(0, 200)}...</p>
                                        <Link to='/blog'><button className='text-lg hover:text-gray-900 text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800 pt-1'>Read More</button></Link>
                                    </div>
                                    :
                                    <span>{article.description}</span>
                                }</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;