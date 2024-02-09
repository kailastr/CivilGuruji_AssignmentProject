import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';


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
                const date = data.data;
                console.log("fetch date :", date);
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



export default Table;

// const tableDataItems = columnData.map((item, index) =>
//     console.log("item full name :",item.fullName)
//     ({
//         id: index,
//         fullName: item.fullName,
//         mobile: item.mobile,
//         email: item.email,
//         mark: '100'
//     }));