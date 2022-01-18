import React from 'react'

export const BasicSpinner = () => {
    return (
        <div>
            <div className="spinner w-12 h-12" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
