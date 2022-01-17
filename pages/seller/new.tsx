import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React, { useState } from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps, IProduct } from '../../utils/types'
import ProductTypeModel from '../../components/Model/ProductType'
import DigitialProductForm from '../../src/page-components/seller/forms/DigitialProduct'
import PhysicalProductForm from '../../src/page-components/seller/forms/PhysicalProduct'
import { ImageType } from 'react-images-uploading'
import { createProductOnServer } from '../../src/api/product/create.api'


const NewListingPage = ({ token }: IPageProps) => {
    const [showProductTypeModel, setShowProductTypeModel] = useState(true);
    const [productType, setProductType] = useState('');



    const handleSelectProductType = (type: string) => {
        setProductType(type);
        setShowProductTypeModel(false);
    }

    const savePhysicalProductOnServer = async (formData: FormData, values: { title: string, description: string, price: number, isOnSale: boolean, isFeatured: boolean, quantity: number, salePirce: number }) => {
        formData.append('fields', JSON.stringify({ ...values, type: productType }))
        const response = await createProductOnServer(formData, token)
        if (!response.ok) {
            console.log(response.originalError.response);
        }
        console.log(response.data);
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