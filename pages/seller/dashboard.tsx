import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'
import { H6 } from '../../components/headings/H6'
import { BasicTooltip } from '../../components/tooltip/BasicTooltip'
import { FeaturedCard } from '../../components/card/FeaturedCard'
import { useQuery } from 'react-query'
import { getSellerFeaturedProducts } from '../../src/api/product/seller.api'
import { BasicSpinner } from '../../components/spinner/BasicSpinner'



const DashboardPage = ({ token }: IPageProps) => {
    const { data: featured, isLoading: featuredLoading } = useQuery('seller-featured', () => getSellerFeaturedProducts(token))

    return (
        <SellerLayout token={token} pageTitle='Welcome To Dashboard'>
            <div className='mt-5 flex items-center relative'>
                <H6 text='Featured Products' size='text-xl' color='black' className='font-semibold tracking-wider' />
                <BasicTooltip text='Only Published Products will show here' />
            </div>
            {/* Featured Products */}
            <div>
                {featuredLoading && <BasicSpinner />}
                <FeaturedCard data={featured!} isLoading={featuredLoading} />
            </div>
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