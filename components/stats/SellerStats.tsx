import { ApiResponse } from 'apisauce'
import { BasicSpinner } from '../../components/spinner/BasicSpinner'
import React, { useContext } from 'react'
import { IProduct } from '../../utils/types'
import { format, parse, parseISO } from 'date-fns'
import { AuthContext } from '../../context/AuthContext'
import moment from 'moment'
import { filterProducts } from '../../utils/products'

interface IProps {
    data: ApiResponse<unknown, unknown>;
    isLoading: boolean;
}

export const SellerStats = ({ data, isLoading }: IProps) => {
    const { state } = useContext(AuthContext)
    if (isLoading) {
        return <BasicSpinner />
    }

    const response = data.data as IProduct[];

    if (!data.ok || !response) {
        return null;
    }

    return (
        <div>
            <div className="w-full shadow stats">
                <div className="stat place-items-center place-content-center">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">{response.length}</div>
                    <div className="stat-desc">{moment(state.user?.createdAt).format("MMM Do")} - {moment(new Date()).format("MMM Do")}</div>
                </div>
                <div className="stat place-items-center place-content-center">
                    <div className="stat-title">Featured Products</div>
                    <div className="stat-value text-success">{filterProducts(response, 'isFeatured').length}</div>
                </div>
                <div className="stat place-items-center place-content-center">
                    <div className="stat-title">Published Products</div>
                    <div className="stat-value text-error">{filterProducts(response, 'isPublished').length}</div>
                </div>
            </div>
        </div>
    )
}
