import React from 'react';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const CourseCard = (props) => {

    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className='bg-white p-4 mb-4 w-full rounded-2xl transition duration-700 ease-in-out sm:drop-shadow-md md:shadow-none lg:shadow-none hover:drop-shadow-lg'
            >
                <div
                    className='w-full relative'
                >
                    <div className='w-full bottom-4 flex items-end justify-between'>
                        <img
                            src={props.img}
                            alt={props.title}
                            className='w-full h-full rounded-2xl'
                        />
                    </div>
                    <div className='my-2 flex flex-col gap-2'>
                        <div className='flex items-center justify-center my-5'>
                            <h4 className='text-xl font-medium'>{props.title}</h4>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                className='w-1/2 h-10 text-lg rounded-lg bg-blue-400 hover:bg-blue-500 transition duration-200 ease-in-out'
                            >
                                View Course details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {props.title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-yellow-500">
                                            {props.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex gap-3">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Purchase Course
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div >
                </Dialog >
            </Transition >
        </>
    )
}

export default CourseCard;