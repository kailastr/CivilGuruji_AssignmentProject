import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {

    const [email, setEmail] = useState();

    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function formSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:4000/signin', { email, password })
            .then(result => {
                const responceMsg = result.data.error;
                console.log("responce msg: " + responceMsg);
                if (responceMsg === "success") {
                    navigate('/home');
                }
                else {
                    alert(responceMsg);
                }
            })
    }

    return (
        <>
            {/* body */}
            <div className='flex align-middle justify-center h-full mt-20'>
                {/* maindiv */}
                <div className='bg-white rounded-lg w-2/5 h-2/3 p-3 m-5'>
                    {/* top-div */}
                    <div className='flex justify-center'>
                        <h3 className='text-2xl my-10'>Login Page</h3>
                    </div>

                    {/* input div */}
                    <form onSubmit={formSubmit}>
                        <label htmlFor="username" className='block m-2 w-3/4'>User Name : </label>
                        <input
                            type="text"
                            name="email"
                            id="username"
                            placeholder='Enter your email as username'
                            className='w-full appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                            onChange={(e) => { setEmail(e.target.value) }}
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
                            <input type="submit" value="LOGIN" className='bg-blue-300 my-5 p-3 rounded-lg w-40 text-md hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer' />
                        </div>
                    </form>

                    {/* bottom div */}

                    <div className='w-full flex justify-center align-middle my-4 mx-2'>
                        <Link to={"/signup"} >
                            <p className='text-blue-600 hover:text-blue-800 mb-10'>Don't have an account to Login ?</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default LoginPage;
