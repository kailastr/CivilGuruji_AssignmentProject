import React from 'react';
import DetailsTable from '../components/DetailsTable';

const homePage = () => {
    return (
        <div>
            <div className='bg-white'>
                <h1 className='text-2xl ml-5 py-3'>Table indications</h1>
                <div className='flex gap-3 ml-5'>
                    <div className='m-2 h-5 w-5 bg-red-500' />
                    <p className='my-2'>User Logged In before 5 days</p>
                    <div className=' ml-10 m-2 h-5 w-5 bg-yellow-500' />
                    <p className='my-2'>Course viewed but not purchased</p>
                </div>
            </div>
            <DetailsTable />

        </div>
    )
}

export default homePage