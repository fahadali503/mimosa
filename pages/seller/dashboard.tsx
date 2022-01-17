import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React, { useEffect } from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'
import { H6 } from '../../components/headings/H6'
import { BasicTooltip } from '../../components/tooltip/BasicTooltip'
import { FeaturedCard } from '../../components/card/FeaturedCard'
import { API } from '../../src/api'



const DashboardPage = ({ token }: IPageProps) => {

    useEffect(() => {
        (async () => {
            const response = await API.get('/product/featured', {}, { headers: { Authorization: `Bearer ${token}` } });
            console.log(response.data);
        })()
    }, [token])

    return (
        <SellerLayout token={token} pageTitle='Welcome To Dashboard'>
            <div className='mt-5 flex items-center relative'>
                <H6 text='Featured Products' size='text-xl' color='black' className='font-semibold tracking-wider' />
                <BasicTooltip text='Only Published Products will show here' />
            </div>
            {/* Featured Products */}
            <div>
                <FeaturedCard />
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