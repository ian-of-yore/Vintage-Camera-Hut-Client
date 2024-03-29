import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useToken } from '../../../hooks/useToken';

const Register = () => {
    const imageBBKey = process.env.REACT_APP_imageBB;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [error, setError] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleRegister = (data) => {
        setError('');
        const img = data.userImg[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userInfo = {
                        displayName: data.name,
                        photoURL: imgData.data.url,
                        email: data.email,
                        role: data.userRole
                    }
                    createUser(data.email, data.password)
                        .then((result) => {
                            // console.log(result.user);
                            updateUserProfile({
                                displayName: data.name,
                                photoURL: imgData.data.url
                            })
                                .then((result) => {
                                    // console.log(result)
                                    saveUserToDB(userInfo)
                                })
                                .catch((err) => {
                                    console.log(err);
                                    setError(err.message)
                                })
                        })
                        .catch((err) => {
                            console.log(err);
                            setError(err.message)
                        })
                }
            })
    }

    const saveUserToDB = (userInfo) => {
        fetch('https://rangefinder-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success('Welcome!');
                // navigate('/');
                setCreatedUserEmail(userInfo.email);
            })
    }

    const handleGoogleLogin = () => {
        setError('');
        googleLogin()
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    email: user.email,
                    role: "Buyer",
                    displayName: user.displayName,
                    photoURL: user.photoURL
                };
                saveUserToDB(userInfo)
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            })
    }

    return (
        <div className='bg-secondary flex justify-center min-h-screen items-center py-10'>
            <div className='w-11/12 sm:w-10/12 lg:w-2/3 mx-auto'>
                <h3 className='text-3xl font-mono mt-7 text-white'>Register</h3>
                <form onSubmit={handleSubmit(handleRegister)} className='grid grid-cols-1 gap-3 text-black '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                        <div>
                            <label className="label"> <span className="label-text">Full Name</span> </label>
                            <input {...register('name')} type="text" className="input input-bordered w-full h-10" required />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Email Address</span> </label>
                            <input {...register('email')} type="email" className="input input-bordered w-full h-10" required />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input {...register('password')} type="password" className="input input-bordered w-full h-10" required />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Your Picture</span> </label>
                            <input {...register('userImg')} type="file" className="file-input file-input-bordered file-input-primary w-full h-10" required />
                        </div>
                        <div>
                            <label className="label"> <span className="label-text">Continue as a..</span> </label>
                            <select {...register('userRole')} className="select select-info w-full h-10 mb-2" required>
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                    </div>
                    {
                        <p className='text-red-600 text-lg font-semibold text-center'>{error}</p>
                    }
                    <p className='text-white'>Already have an account? <Link to='/login' className='underline'>Login</Link></p>
                    <input type="submit" className='btn bg-gray-600 text-white font-semibold text-lg' value="Register" />
                </form>
                <div className="divider text-white">OR</div>
                <button onClick={handleGoogleLogin} className='btn bg-gray-600 text-white font-semibold text-lg w-full'>Continue with Google <FcGoogle className='w-6 h-6 ml-2'></FcGoogle></button>
            </div>
        </div>
    );
};

export default Register;