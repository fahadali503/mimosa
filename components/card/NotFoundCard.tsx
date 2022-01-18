import React from 'react'

interface IProps {
    title: string;
    description: string;
    titleClassName?: string;
    descriptionClassName?: string;
    btn1Text?: string;
    btn1Callback?: () => void;
}

export const NotFoundCard = ({ descriptionClassName, titleClassName, description, title, btn1Callback, btn1Text = "Get Started Now" }: IProps) => {
    return (
        <div className="card lg:card-side shadow-lg card-bordered">
            <div className="card-body">
                <h2 className={`card-title ${titleClassName}`}>{title}</h2>
                <p className={`${descriptionClassName}`}>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={btn1Callback}>{btn1Text}</button>
                </div>
            </div>
        </div>
    )
}
