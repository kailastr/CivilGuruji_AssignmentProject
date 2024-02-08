import React from 'react'

const courseCard = (props) => {

    return (
        <>
            <div className='bg-white p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out sm:drop-shadow-md md:shadow-none lg:shadow-none hover:drop-shadow-lg '>
                <div className='w-full relative'>
                    <div className='w-full bottom-4 flex items-end justify-between'>
                        <img
                            src={props.img}
                            alt={props.title}
                            className='w-full h-full rounded-2xl'
                        />
                    </div>
                    <div className='my-2 flex flex-col gap-2'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-xl font-medium'>{props.title}</h4>
                        </div>
                        <div className='flex items-center justify-between text-gray-500 gap-2'>
                            <p className='truncate w-3/5'>{props.description}</p>
                            <p className='2/5'>₹ {props.price}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 h-10 text-lg rounded-lg bg-blue-400 hover:bg-blue-500 transition duration-200 ease-in-out'>Purchase course</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default courseCard