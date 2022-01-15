/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { MdReorder } from 'react-icons/md'
import { BiShoppingBag, BiSearch, } from 'react-icons/bi'
import { useTimeoutFn, useWindowScroll } from 'react-use'
import { NavDropdown } from '../../components/dropdown/NavDropdown'
import { Transition } from '@headlessui/react';
import Link from 'next/link'

export const logo = "https://template.hasthemes.com/mimosa/mimosa/img/logo/1.png"
export const Nav = () => {
    const [showAccountDropdown, setShowAccountDropdown] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null);
    const { x, y } = useWindowScroll();



    return (
        <div ref={scrollRef} className='h-20 w-full fixed top-0 left-0 right-0  font-poppins font-semibold cursor-pointer text-black bg-transparent border z-30' style={{ backgroundColor: `${y > 20 && "rgba(255,255,255,0.9)"}`, zIndex: 100 }}>
            <div className='grid grid-cols-3 px-20 justify-center items-center h-full'>
                <div>
                    <Link href={'/'} passHref>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='flex text-sm font-medium list-none justify-between'>
                    <li className=' hover:text-red-500'>Home</li>
                    <li className=' hover:text-red-500'>Men</li>
                    <li className=' hover:text-red-500'>Accessories</li>
                    <li className=' hover:text-red-500'>Women</li>
                </div>
                <div className='justify-self-end w-48'>
                    <div className='flex font-poppins text-2xl font-normal justify-between '>
                        <div className=' hover:text-red-500'>
                            <BiSearch />
                        </div>
                        <div className=' hover:text-red-500'>
                            <BiShoppingBag />
                        </div>
                        <div className='relative' >
                            <MdReorder onClick={() => setShowAccountDropdown(!showAccountDropdown)} className='hover:text-red-500' />
                            {
                                showAccountDropdown && <Transition show={showAccountDropdown}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <NavDropdown />
                                </Transition>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
