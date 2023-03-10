import React from 'react'
import Topnav from '../components/Navbar'

const Dashboard = () => {
  return (
    <div>
         <Topnav />
        {/* <AuthDetails /> */}
        <h1 className='mb-6'>D A S H B O A R D</h1>
        <h1 className='mt-6'>Only Obidients can view this page</h1>
    </div>
  )
}

export default Dashboard