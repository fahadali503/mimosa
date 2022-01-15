import { AuthContext } from '../../context/AuthContext'
import React, { useContext, useEffect } from 'react'
import { Layout } from '.'
import { Loader } from './Loader'
import { useRouter } from 'next/router'
import { getUserFromLocalStorage } from '../../src/localStorage'
import { isEmpty } from 'lodash'

interface IProps {
    pageTitle: string;
}


export const SellerLayout: React.FC<IProps> = ({ children, pageTitle }) => {
    const { loading, state } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        const jwt = getUserFromLocalStorage()
        if (isEmpty(jwt)) {
            router.push({ pathname: '/login', query: { redirectTo: router.asPath } })
        }
    }, [router])

    if (loading) {
        return <Loader />
    }

    return (
        <Layout pageTitle={pageTitle}>
            {children}
        </Layout>
    )
}
