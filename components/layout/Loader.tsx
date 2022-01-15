import React from 'react'

export const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center w-full'>
            <div className="w-40 h-40  border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    )
}
