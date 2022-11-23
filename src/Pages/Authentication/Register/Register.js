import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, googleLogin, updateUserProfile } = useContext(AuthContext);


    const handleRegister = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                toast.success('Registration Complete!');
                updateUserProfile({
                    displayName: data.name
                })
                    .then((result) => console.log(result))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                toast.success('Welcome!')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='bg-secondary flex justify-center min-h-screen items-center py-10'>
            <div className='w-1/3 mx-auto'>
                <h3 className='text-3xl font-mono mb-7 text-white'>Register</h3>
                <form onSubmit={handleSubmit(handleRegister)} className='grid grid-cols-1 gap-3 text-black '>
                    <div>
                        <label className="label"> <span className="label-text">Full Name</span> </label>
                        <input {...register('name')} type="text" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text">Email Address</span> </label>
                        <input {...register('email')} type="email" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input {...register('password')} type="password" className="input input-bordered w-full h-10" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text">Your Picture</span> </label>
                        <input {...register('userImg')} type="file" className="file-input file-input-bordered file-input-primary w-full h-10" />
                    </div>
                    <div>
                        <label className="label"> <span className="label-text">Continue as a..</span> </label>
                        <select {...register('userRole')} className="select select-info w-full h-10 mb-2">
                            <option>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
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