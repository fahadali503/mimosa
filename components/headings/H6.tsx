import React, { HTMLAttributes } from 'react'

interface IH6Props {
    color?: string;
    size?: string;
    text: string;
    className?: string
}

export const H6 = ({ text, className, color = "#929292", size = "text-sm" }: IH6Props) => {
    return (
        <h6 style={{ color }} className={`font-poppins ${size} ${className}`}>{text}</h6>
    )
}
