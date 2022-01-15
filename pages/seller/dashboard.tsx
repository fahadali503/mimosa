import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'


const DashboardPage = ({ token }: IPageProps) => {
    console.log(token);
    return (
        <SellerLayout token={token} pageTitle='Welcome To Dashboard'>
            Dashboard
        </SellerLayout>
    )
}

export default DashboardPage

export const getServerSideProps: GetServerSideProps = gssp(async (ctx: any) => {
    const token = ctx.token
    return {
        props: {
            token
        }
    }
})