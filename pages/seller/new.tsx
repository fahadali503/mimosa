import { SellerLayout } from '../../components/dashboard/SellerLayout'
import React, { useState } from 'react'
import { gssp } from '../../utils/gssp'
import { GetServerSideProps } from 'next'
import { IPageProps } from '../../utils/types'
import ProductTypeModel from '../../components/Model/ProductType'
import DigitialProductForm from '../../src/page-components/seller/forms/DigitialProduct'
import PhysicalProductForm from '../../src/page-components/seller/forms/PhysicalProduct'


const NewListingPage = ({ token }: IPageProps) => {
    const [showProductTypeModel, setShowProductTypeModel] = useState(true);
    const [productType, setProductType] = useState('');



    const handleSelectProductType = (type: string) => {
        setProductType(type);
        setShowProductTypeModel(false);
    }


    return (
        <SellerLayout token={token} pageTitle='Shop - Create new Listing'>
            <div>
                {
                    productType === 'digital' && <DigitialProductForm />
                }

                {productType === 'physical' && <PhysicalProductForm />}
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