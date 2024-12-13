import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import './Layout.css'

export default function Layout() {
  return (
    <div className='page-container'>
        <Header />
        <div className='content'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
