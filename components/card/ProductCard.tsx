/* eslint-disable @next/next/no-img-element */
import { H6 } from '../../components/headings/H6'
import React from 'react'

interface IProductCard {
    imageUrl: string;
    title: string;
    quantity: number;
}

export const ProductCard = ({ imageUrl, quantity, title }: IProductCard) => {
    return (
        <div className="lg:w-full md:w-10/12">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img
                    src={imageUrl}
                    alt="image"
                    className="w-full"
                />
                <div className="text-center">

                    <p className="text-base text-gray-400 text-body-color leading-relaxed ">
                        {quantity} {quantity === 1 ? " Product" : " Products"}
                    </p>
                    <H6 text={title} className='font-medium' color='black' />

                </div>
            </div>
        </div>
    )
}
