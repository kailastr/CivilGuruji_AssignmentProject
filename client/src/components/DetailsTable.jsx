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
                console.log("fetch fn data :", data.data);
                
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
            name: 'Mark',
            selector: row => row.mark,
            sortable: true,
            fixed: true,
        },
    ]

    // const tableDataItems = [
    //     {
    //         fullName: columnData.fullName,
    //         mobile: columnData.phoneNum,
    //         email: columnData.email,
    //         mark: '100'
    //     }
    // ]

    
    const tableDataItems = Array.isArray(columnData) ? columnData.map((item, index) => ({
        
        id: index,
        fullName: item.fullName,
        mobile: item.phoneNum,
        email: item.email,
        mark: '100'
    })) : [];

    // const tableDataItems = [
    //     {
    //         id: 1,
    //         fullName: 'Kailas',
    //         mobile: '566645',
    //         email: 'sdghdrh5675ghb',
    //         mark: '55'
    //     },
    //     {
    //         id: 1,
    //         fullName: 'Navas',
    //         mobile: '566645',
    //         email: 'sdghdrh5675ghb',
    //         mark: '39'
    //     },
    //     {
    //         id: 1,
    //         fullName: 'Zishan',
    //         mobile: '566645',
    //         email: 'sdghdrh5675ghb',
    //         mark: '100'
    //     },
    // ]

    const conditionalRowStyles = [
        {
            when: row => row.mark < 50,
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
            when: row => row.mark >= 60,
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