import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import { Nav } from './Nav'

interface ILayoutProps {
    pageTitle: string
}

export const Layout: React.FC<ILayoutProps> = ({ pageTitle, children }) => {
    return (
        <>
            <Head><title>{pageTitle}</title></Head>
            <div className='h-screen relative  z-40'>
                <Nav />
                <section className='mt-20'>
                    {children}
                </section>
                <Footer />

                <div className='mt-10 h-10 font-poppins text-sm'>
                    <div className='px-28'>
                        <p> &copy; 2021 <span className='text-gray-400 font-bold'>Mimosa</span> Made with <span className='text-red-500'>&hearts;</span> by <a className='' href="https://www.facebook.com/Fahad.ali.420/">Fahad Ali</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
