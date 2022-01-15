import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'


const NewListingPage = ({ token }: IPageProps) => {

    return (
        <SellerLayout token={token} pageTitle='Welcome To Dashboard'>
            New Listing Page
        </SellerLayout>
    )
}

export default NewListingPage

export const getServerSideProps: GetServerSideProps = gssp(async (ctx: any) => {
    const token = ctx.token
    return {
        props: {
            token
        }
    }
})