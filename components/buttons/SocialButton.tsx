import React from 'react'
import { MdOutlineFacebook } from 'react-icons/md'
import { Colors } from '../../utils/colors'


interface IProps {

}

export const SocialButton: React.FC = ({ children }) => {
    return (
        <div className='border cursor-pointer hover:text-white  px-2 py-2 hover:bg-black border-gray-300 rounded-full'>
            {children}
        </div>
    )
}
