/* eslint-disable @next/next/no-img-element */
import { SellerLayout } from '../../../components/dashboard/SellerLayout'
import React, { useEffect, useState } from 'react'
import { gssp } from '../../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps, IProduct } from '../../../utils/types'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getSellerSingleProduct } from '../../../src/api/product/seller.api'
import { BasicSpinner } from '../../../components/spinner/BasicSpinner'
import { SomethingWentWrong } from '../../../components/notfound/SomethingWentWrong'
import { H6 } from '../../../components/headings/H6'


const SellerSingleProductPage = ({ token }: IPageProps) => {
    const [imageUrl, setImageUrl] = useState('');
    const router = useRouter();
    const { data: response, isLoading, error } = useQuery('seller-product', () => getSellerSingleProduct(router.query.id as string, token))
    const product = response!.data as IProduct;

    useEffect(() => {
        if (product) {
            setImageUrl(product.images[0])
        }
    }, [product])

    if (isLoading) {
        return <BasicSpinner />
    }

    if (!response?.ok) {
        return <SomethingWentWrong />
    }

    return (
        <SellerLayout token={token} pageTitle='Single Product'>
            <H6 text='Product Details' color='black' size='text-5xl' className='text-center mt-4 tracking-widest' />

            <div className='mt-10'>
                <div className="grid grid-cols-2">
                    <div className='justify-self-center'>
                        <img className='h-1/2' src={imageUrl} alt="" />
                        <div className='flex flex-wrap items-center mt-5'>
                            {product.images.map((img, i) => {
                                return <div className="avatar" key={i}>
                                    <div className="mb-8 rounded-box w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={img} alt={`${i}`} />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        </SellerLayout>
    )
}

export default SellerSingleProductPage

export const getServerSideProps: GetServerSideProps = gssp(async (ctx: any) => {
    const token = ctx.token
    return {
        props: {
            token
        }
    }
})