import { H6 } from '../../../components/headings/H6'
import React from 'react'


const WhoAreWe = () => {
    return (
        <div className='my-20'>
            <H6 text='Who Are We' className={"text-center font-bold"} />
            <H6 text='Welcome To Mimosa'
                className={"text-center font-medium"}
                size="text-3xl"
                color='black'
            />
            <div className='mt-10 pb-10'>
                <hr className='w-96 border  border-gray-200 mx-auto' />
            </div>
            <H6 text='Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
            at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
            facilisi.'
                className='text-center w-2/3 mx-auto'
            />
        </div>
    )
}

export default WhoAreWe
