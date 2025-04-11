import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Toaster } from "@/components/ui/sonner"
import { Outlet, ScrollRestoration } from 'react-router'

const RootLayout: React.FC = () => {
  return (
    <div>
       <ScrollRestoration />
        <Navbar/> 
       <div>
       <Outlet />
       <Toaster />
       </div>
        <Footer />
    </div>
  )
}

export default RootLayout