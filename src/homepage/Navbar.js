import React from 'react';
import logo from '../images/logo.png'

function Navbar() {
    return (
        <div className="navbar container px-12 md:flex md:justify-between">
            <div className="">
                <a href='/' className='w-40'><img src={logo} alt="" /> </a>
            </div>
            <div className="">
                <h3 className='text-xl font-semibold'>Need help? Call 81007344682</h3>
            </div>
        </div>
    )
}

export default Navbar
