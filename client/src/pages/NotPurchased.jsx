import React, { useState, useEffect } from 'react';

import DataTable from 'react-data-table-component';

import DefaultLayout from '../layouts/DefaultPageLayout';

const Table = () => {

    let [columnData, setColumnData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(respone => respone.json())
            .then(data => {
                setColumnData(data);

            })
    })

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <DataTable
            title="Users viewed course but not purchased"
            columns={columns}
            data={data}
        />
    );
};

const NotPurchased = () => {
    return (
        <>
            <Table />
        </>
    )
}

export default DefaultLayout(NotPurchased);