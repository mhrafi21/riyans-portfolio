import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router'

const RootLayout: React.FC = () => {
  return (
    <div>
       <ScrollRestoration />
        <Navbar/> 
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout