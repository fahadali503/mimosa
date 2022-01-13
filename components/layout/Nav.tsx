/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { MdReorder } from 'react-icons/md'
import { BiShoppingBag, BiSearch, } from 'react-icons/bi'
import { useWindowScroll } from 'react-use'

export const logo = "https://template.hasthemes.com/mimosa/mimosa/img/logo/1.png"
export const Nav = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { x, y } = useWindowScroll();

    React.useEffect(() => {
        console.log(x, y);
    }, [x, y])

    return (
        <div ref={scrollRef} className='h-20 w-full fixed top-0 left-0 right-0  font-poppins font-semibold cursor-pointer text-black bg-transparent border' style={{ zIndex: 999, backgroundColor: `${y > 20 ? "rgba(255,255,255,0.9)" : y > 600 ? "#fff" : ""}` }}>
            <div className='grid grid-cols-3 px-20 justify-center items-center h-full'>
                <div>
                    <img src={logo} alt="logo" />
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
                        <div className=' hover:text-red-500'>
                            <MdReorder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
