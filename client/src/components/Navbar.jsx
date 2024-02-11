import React from 'react';

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-white p-5'>
      <div className='flex justify-start gap-5'>
        <Link to={'/dashboard'} >
          <h3>Dashboard</h3>
        </Link>
        <Link to={'/course'} >
          <h3>Courses</h3>
        </Link>
        <Link to={'/usernotloggedin'} >
          <h3>Users not logged in for 5 days</h3>
        </Link>
        <Link to={'/usercoursepotpurchased'}>
          <h3>Users who doesnt purchased courses</h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar