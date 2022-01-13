import { H6 } from '../../../components/headings/H6'
import React from 'react'
import { ProductCard } from '../../../components/card/ProductCard'


const products: { id: string, imageUrl: string, quantity: number, title: string }[] = [
    { id: '1', imageUrl: "https://template.hasthemes.com/mimosa/mimosa/img/product/collection-1.jpg", quantity: 2, title: " Dagger Smart Jeans " },
    { id: '2', imageUrl: "https://template.hasthemes.com/mimosa/mimosa/img/product/collection-2.jpg", quantity: 3, title: "yellow Print  T- Shirt " },
    { id: '3', imageUrl: "https://template.hasthemes.com/mimosa/mimosa/img/product/collection-3.jpg", quantity: 4, title: "Jacket Stonewash " },
    { id: '4', imageUrl: "https://template.hasthemes.com/mimosa/mimosa/img/product/collection-4.jpg", quantity: 5, title: "Skinny Jeans Shirt" },
]
const ShopByCollection = () => {
    return (
        <div className='mb-20'>
            <H6 text='Shop By Collection' color='black' size='text-3xl' className='font-medium text-center' />
            <div className='mt-10 grid px-10 lg:grid-cols-4 md:grid-cols-2 gap-10 auto-cols-max'>
                {products.map(p => <ProductCard key={p.id} imageUrl={p.imageUrl} quantity={p.quantity} title={p.title} />)}
            </div>
        </div>
    )
}

export default ShopByCollection
