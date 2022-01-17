import React, { useState } from 'react'

interface IProp {
    text: string;
}
export const BasicTooltip = ({ text }: IProp) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='ml-3 border rounded-full px-3 py-1 relative'>
                <span>?</span>
            </div>
            {show && <div className='absolute left-40 top-10 rounded-none py-2 px-5 shadow-lg bg-gray-600 text-white font-medium  card'>
                {text}
            </div>}
        </>
    )
}
