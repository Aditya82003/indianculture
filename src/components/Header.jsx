import React from 'react'
import { Link } from 'react-router'
import Contactus from './Contactus'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-transparent '>
    <div className='container mx-auto '>
        <div className='h-16 bg-transparent flex items-center justify-between px-6'>
          <Link to="/" className='font-bold text-4xl text-white'>&#33;ndia</Link>
          <div className='flex gap-6 text-2xl font-semibold text-white tracking-tighter'>
            <Link className='hidden md:block' to="/">Home</Link>
            <Link className='hidden md:block' to="/gallery">Gallery</Link>
            <Link className='hidden md:block' to="/shopping">Shopping</Link>
            <Link className='hidden md:block' to="/contactus">Our Contact</Link>
          </div>
        </div>
    </div>
    </header>
  )
}

export default Header