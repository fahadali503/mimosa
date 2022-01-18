import { ApiResponse } from 'apisauce'
import { BasicSpinner } from '../../components/spinner/BasicSpinner'
import React from 'react'
import { IObjectUnknown, IProduct } from '../../utils/types'
import { NotFoundCard } from './NotFoundCard'
import Slider from "react-slick";
interface IProps {
    isLoading: boolean;
    data: ApiResponse<unknown, unknown>
}

export const FeaturedCard = ({ data, isLoading }: IProps) => {

    const displayProducts = (products: IProduct[]) => {
        return products.map(p => {
            return <div className="py-6 ml-10" key={p._id}>
                <div className="flex max-w-md  bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-cover" style={{ backgroundImage: ` url(${p.thumbnail})` }}>
                    </div>
                    <div className="w-2/3 p-4">
                        <h1 className="text-gray-900 font-bold text-2xl">{p.title}</h1>
                        <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
                        <div className="flex item-center mt-2">
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                            <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                        </div>
                        <div className="flex item-center justify-between mt-3">
                            <h1 className="text-gray-700 font-bold text-xl">{p.price}</h1>
                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    if (isLoading) {
        return <BasicSpinner />
    }

    if (!data.ok) {
        return <div className="alert text-red-700 bg-red-100" role="alert">{data.problem}</div>
    }

    const res = data.data as IObjectUnknown<IProduct[]>;
    const products = res.products;
    if (products.length === 0 || !products) {
        return <NotFoundCard titleClassName={"text-red-500"} descriptionClassName='font-medium' title='OOPs!!!' description="Seems like you haven't created product yet or it is not featured." />
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
        <div className='w-full'>
            <Slider swipeToSlide {...settings}>
                {displayProducts(products)}
            </Slider>
        </div>
    )
}
