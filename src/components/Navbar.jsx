import React from 'react';
import { link } from '../constant'
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full bg-white shadow-sm '>
            <div className='flex justify-between p-5 cursor-pointer'>
                <h2 className='font-bold text-md'>Sohail.dev</h2>
                <ul className='flex space-x-5'>
                    <li className='font-semibold'>
                        <Link to='section1' smooth={true} duration={500} className="hover:text-gray-300 cursor-pointer">
                            Home
                        </Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='section2' smooth={true} duration={500} > About
                        </Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='section3' smooth={true} duration={500} className=" hover:text-gray-300 cursor-pointer">
                            Projects
                        </Link>
                    </li>
                    <li className='font-semibold'>
                        <Link to='section4' smooth={true} duration={500} className=" hover:text-gray-300 cursor-pointer">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar