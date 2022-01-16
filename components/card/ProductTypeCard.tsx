import React from 'react'


interface IProps {
    title: string;
    description: string;
    onClickHandler?: () => void
}
export const ProductTypeCard = ({ description, title, onClickHandler }: IProps) => {
    return (
        <div onClick={onClickHandler} className='cursor-pointer'>
            <div className="card border hover:shadow-md hover:bg-gray-100">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-500 font-medium'>{description}</p>
                </div>
            </div>
        </div>
    )
}
