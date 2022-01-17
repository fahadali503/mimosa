import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React, { useState } from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { ICommonServerResponse, IPageProps, IProduct } from '../../utils/types'
import ProductTypeModel from '../../components/Model/ProductType'
import DigitialProductForm from '../../src/page-components/seller/forms/DigitialProduct'
import PhysicalProductForm from '../../src/page-components/seller/forms/PhysicalProduct'
import { createProductOnServer } from '../../src/api/product/create.api'
import toast from 'react-hot-toast'
import { invalidTokenOrError } from '../../utils/errors'
import { useRouter } from 'next/router'


const NewListingPage = ({ token }: IPageProps) => {
    const [showProductTypeModel, setShowProductTypeModel] = useState(true);
    const [productType, setProductType] = useState('');
    const router = useRouter()


    const handleSelectProductType = (type: string) => {
        setProductType(type);
        setShowProductTypeModel(false);
    }

    const savePhysicalProductOnServer = async (formData: FormData, values: { title: string, description: string, price: number, isOnSale: boolean, isFeatured: boolean, quantity: number, salePirce: number }) => {
        formData.append('fields', JSON.stringify({ ...values, type: productType }))
        const response = await createProductOnServer(formData, token)
        const data = response.data as ICommonServerResponse;
        if (!response.ok && response.problem === 'CLIENT_ERROR') {
            const { error, invalidTokenError } = invalidTokenOrError(response)
            toast.error(invalidTokenError || error)
        } else {
            toast.success(data.message)
            // router.push('/seller/dashboard')
        }
    }

    return (
        <SellerLayout token={token} pageTitle='Shop - Create new Listing'>
            <div>
                {
                    productType === 'digital' && <DigitialProductForm />
                }

                {productType === 'physical' && <PhysicalProductForm savePhysicalProductOnServer={savePhysicalProductOnServer} />}
            </div>
            <div>
                {showProductTypeModel && <ProductTypeModel handleSelectProductType={handleSelectProductType} open={showProductTypeModel} setOpen={setShowProductTypeModel} />}
            </div>


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