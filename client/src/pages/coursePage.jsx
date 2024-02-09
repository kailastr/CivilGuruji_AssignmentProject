import React, { useState, Fragment } from 'react';
import CourseCard from '../components/courseCard';

const coursePage = () => {

    const courseDetails = [
        {
            img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg",
            title: "AI and Machine learning",
            price: "4600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg",
            title: "AI and Machine learning",
            price: "4600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg",
            title: "AI and Machine learning",
            price: "4600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg",
            title: "AI and Machine learning",
            price: "4600",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]

    return (
        <>

            <div className=' items-center'>
                <h1 className='text-2xl block text-center mt-10 w-full h-20'>Courses offered</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-20'>
                    {courseDetails.map((each, index) => (
                        <CourseCard {...each} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default coursePage