import Link from 'next/link'
import React from 'react';

export const NavDropdown = () => {
    return (
        <div className='absolute right-0'>
            <div className="absolute font-poppins right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <div className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                    <h1 className='text-lg uppercase'>My Account</h1>
                    <hr />
                    <Link href={'/register'} passHref>
                        <a className="block px-4 py-2 mt-2 text-xs font-light  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-500 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Register</a>
                    </Link>
                    <Link href={'/login'}>
                        <a className="block px-4 py-2 mt-2 text-xs font-light  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-500 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Login</a>
                    </Link>
                    <a className="block px-4 py-2 mt-2 text-xs font-light  bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-red-500 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Logout</a>
                </div>
            </div>
        </div>
    )
}
