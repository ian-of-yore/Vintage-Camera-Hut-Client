import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const { userLogin, googleLogin } = useContext(AuthContext);

    const handleLogin = (data) => {
        userLogin(data.email, data.password)
            .then((result) => {
                // console.log(result.user);
                toast.success('Welcome!!')
            })
            .catch((err) => console.log(err))
    }

    const saveUserToDB = (userInfo) => {
        fetch('http://localhost:5000/users', {
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
            })
    }

    const handleGoogleLogin = () => {
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
            .catch((err) => console.log(err))
    }

    return (
        <div className='bg-secondary flex justify-center h-screen items-center'>
            <div className='w-1/3 mx-auto'>
                <h3 className='text-3xl font-mono mb-7 text-white'>Login</h3>
                <form onSubmit={handleSubmit(handleLogin)} className='grid grid-cols-1 gap-3 text-black '>
                    <div>
                        <label className="label"> <span className="label-text">Email Address</span> </label>
                        <input {...register('email')} type="email" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input {...register('password')} type="password" className="input input-bordered w-full h-10" />
                    </div>
                    <p className='text-white'>New here? <Link to='/register' className='underline'>Register</Link></p>
                    <input type="submit" className='btn bg-gray-600 text-white font-semibold text-lg' value="Login" />
                </form>
                <div className="divider text-white">OR</div>
                <button onClick={handleGoogleLogin} className='btn bg-gray-600 text-white font-semibold text-lg w-full'>Continue with Google <FcGoogle className='w-6 h-6 ml-2'></FcGoogle></button>
            </div>
        </div>
    );
};

export default LogIn;