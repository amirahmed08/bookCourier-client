import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../../Components/Navbar'

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex bg-base-200'>

      {/* Left Side */}
      <div className='flex-1 min-h-screen'>
        <div className='max-w-xl mx-auto px-8 pt-6'>

          {/* Logo */}
          {/* <Logo /> */}
                <Navbar></Navbar>
          {/* Form */}
          <div className='bg-gray-50 flex items-center justify-center min-h-[85vh]'>
            <Outlet />
          </div>

        </div>
      </div>

      {/* Right Side */}
      {/* <div className='flex-1 flex justify-center items-center'>
        <img src={loginImg} alt="Auth" />
      </div> */}

    </div>
  )
}

export default AuthLayout