import Head from 'next/head'
import React from 'react'
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

            </div>
        </>
    )
}
