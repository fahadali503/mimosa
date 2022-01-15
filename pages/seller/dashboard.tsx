import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'


const DashboardPage = ({ token }: IPageProps) => {

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