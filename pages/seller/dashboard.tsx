import { SellerLayout } from '../../components/layout/SellerLayout'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const DashboardPage = () => {
    return (
        <SellerLayout pageTitle='Welcome To Dashboard'>
            Dashboard
        </SellerLayout>
    )
}

export default DashboardPage
