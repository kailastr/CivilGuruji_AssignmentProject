import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const SignupPage = () => {

    const [fullName, setFullName] = useState();

    const [email, setEmail] = useState();

    const [phoneNum, setPhoneNum] = useState();

    const [password, setPassword] = useState();

    const [message, setMessage] = useState('');

    function formSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:4000/signup', { fullName, email, phoneNum, password })
            .then(result => {
                const responseMessage = result.data.message;
                console.log(responseMessage);
                setMessage(responseMessage);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {/* body */}
            <div className=' flex align-middle justify-center h-full'>
                {/* maindiv */}
                <div className='bg-white rounded-lg w-2/5 h-2/3 p-3 my-5'>
                    {/* top-div */}
                    <div className='flex justify-center'>
                        <h3 className='text-2xl my-10'>Create Account</h3>
                    </div>

                    {/* input div */}
                    <form onSubmit={formSubmit}>
                        <label htmlFor="fullName" className='block m-2 w-3/4'>Full Name : </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder='Enter your Full Name'
                            className='w-full appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            onChange={(e) => { setFullName(e.target.value) }}
                            required
                        />
                        <label htmlFor="email" className='block m-2 w-3/4'>Email : </label>
                        <input
                            type="email"
                            name="email" id="email"
                            placeholder='Enter your Email id'
                            className='w-full appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <label htmlFor="phoneNum" className='block m-2 w-3/4'>Mobile Number : </label>
                        <input
                            type="number"
                            name="phoneNum"
                            id="phoneNum"
                            placeholder='Enter your Mobile Number'
                            className='w-full appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            onChange={(e) => { setPhoneNum(e.target.value) }}
                            required
                        />
                        <label htmlFor="password" className='block m-2 w-3/4'>Password</label>
                        <input
                            type="password"
                            name='password'
                            id='password'
                            placeholder='Enter your password '
                            className='w-full appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />

                        <div className='w-full flex justify-center align-middle my-4 mx-2'>
                            <input type="submit" value="SUBMIT" className='bg-blue-300 my-4 p-3 rounded-lg w-52 text-md hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer' />
                        </div>
                    </form>

                    {/* Show alert message */}
                    {message && (
                        <div className="w-full flex justify-center align-middle my-4 mx-2">
                            {message === "success" ? (
                                <>
                                    <p className='text-green-600 mb-2'>{message}</p>
                                    <Link to="/login">Go to Login</Link>
                                </>
                            ) : (
                                <p className='text-red-600 mb-2'>{message}</p>
                            )}
                        </div>
                    )}

                    {/* bottom div */}

                    <div className='w-full flex justify-center align-middle my-4 mx-2'>
                        <Link to={`/login`} >
                            <p className='text-blue-600 hover:text-blue-800 mb-10'>Already have an account?</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SignupPage;
