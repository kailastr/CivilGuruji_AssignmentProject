import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';

// import DetailsTable from '../components/DetailsTable';

import DefaultLayout from '../layouts/DefaultPageLayout';

const Table = () => {

    const [columnData, setColumnData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {

                setColumnData(data.data);
            })
            .catch(error => {
                console.log('error', error);
            })
    }, []);

    const columns = [
        {
            name: 'Full Name',
            selector: row => row.fullName,
            sortable: true,
            fixed: true,
        },
        {
            name: 'Mobile',
            selector: row => row.mobile,
            sortable: true,
            fixed: true,
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true,
            fixed: true,
        },
        {
            name: 'Last Login',
            selector: row => row.lastLogin,
            sortable: true,
            fixed: true,
        },
        {
            name: 'Logged in before 5 days',
            selector: row => row.exceededFiveDays,
            sortable: true,
            fixed: true,
        },
    ]

    const tableDataItems = Array.isArray(columnData) ? columnData.map((item, index) => ({
        id: index,
        fullName: item.fullName,
        mobile: item.phoneNum,
        email: item.email,
        lastLogin: item.lastLogin,
        exceededFiveDays: item.exceededFiveDays
    })) : [];

    const conditionalRowStyles = [
        {
            when: row => row.mark > 60,
            style: {
                backgroundColor: 'rgba(240, 240, 240, 0.9)',
                color: 'black',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: row => row.mark >= 50 && row.mark < 60,
            style: {
                backgroundColor: 'rgba(248, 148, 6, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: row => row.exceededFiveDays === "true",
            style: {
                backgroundColor: 'rgba(242, 38, 19, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'not-allowed',
                },
            },
        },
    ];

    return (

        <DataTable
            title="User Details"
            columns={columns}
            data={tableDataItems}
            conditionalRowStyles={conditionalRowStyles}
            pagination
        />
    );
}

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
            <Table />

        </div>
    )
}

export default DefaultLayout(homePage);