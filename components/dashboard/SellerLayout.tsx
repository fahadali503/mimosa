import { AuthContext } from '../../context/AuthContext'
import React, { useContext, useEffect } from 'react'
import { Layout } from '../layout'
import { Loader } from '../layout/Loader'
import { useRouter } from 'next/router'

interface IProps {
    pageTitle: string;
    token: string
}


export const SellerLayout: React.FC<IProps> = ({ children, pageTitle, token }) => {
    const { loading } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (!token) {
            router.push({ pathname: '/login', query: { redirectTo: router.asPath } })
        }
    }, [router, token])

    if (loading) {
        return <Loader />
    }

    return (
        <Layout pageTitle={pageTitle}>
            {children}
        </Layout>
    )
}
