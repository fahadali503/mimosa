/* eslint-disable @next/next/no-img-element */
import { ApiOkResponse, ApiResponse } from 'apisauce'
import { BasicSpinner } from '../../components/spinner/BasicSpinner'
import React from 'react'
import { IProduct } from '../../utils/types'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import Link from 'next/link'

interface IProps {
    data: ApiResponse<unknown, unknown>;
    isLoading: boolean
}

export const DisplaySellerProducts = ({ data, isLoading }: IProps) => {
    if (isLoading) {
        return <BasicSpinner />
    }

    if (!data.ok) {
        return null;
    }
    const response = data.data as IProduct[];
    if (response.length === 0 || !response) {
        return null;
    }

    const displayList = () => {
        return response.map(product => {
            return <tr key={product._id}>
                <th>
                    {product._id.slice(0, 5)}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                {product.title}
                            </div>
                            <div className="text-sm opacity-50">
                                {product.description.slice(0, 100)}
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {product.price}$
                    <br />
                    <span>{product.isOnSale ? `Sale Price ${product.salePrice}}` : ""}</span>
                </td>
                <td className='text-center'>{product.isPublished ? <AiFillCheckCircle className='text-green-600 text-center' /> : <AiFillCloseCircle className='text-center text-red-600' />}</td>
                <th>
                    <Link href={`/seller/product/${product._id}`} passHref>
                        <button className="btn btn-ghost btn-xs">details</button>
                    </Link>
                </th>
            </tr>

        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>Info</th>
                            <th>Price</th>
                            <th>Published</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayList()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
