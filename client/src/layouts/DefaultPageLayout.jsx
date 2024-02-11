import React from 'react';

import Navbar from '../components/Navbar';

const DefaultLayout = (Component) => ({ props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
        </div>
    )
}

export default DefaultLayout