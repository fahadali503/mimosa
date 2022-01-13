/* eslint-disable @next/next/no-img-element */
import { SocialButton } from '../../components/buttons/SocialButton'
import React from 'react'
import { Colors } from '../../utils/colors'
import { logo } from './Nav'
import { MdOutlineFacebook } from 'react-icons/md'
import { FaTwitter, FaFacebook, FaInstagram, FaGooglePlus, FaGoogleWallet, FaGoogle } from 'react-icons/fa'
import { H6 } from '../../components/headings/H6'

export const Footer = () => {
    return (
        <div className='w-full h-96' style={{ backgroundColor: Colors.backgroundGray }}>
            <div className="grid grid-cols-2  px-28 pt-24">
                <div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className='mt-10 '>
                        <p className={`text-gray-500`}>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                    </div>
                    <div className='mt-10 w-1/2 flex justify-between'>
                        <SocialButton>
                            <FaFacebook className='text-2xl ' />
                        </SocialButton>
                        <SocialButton>
                            <FaTwitter className='text-2xl ' />
                        </SocialButton>
                        <SocialButton>
                            <FaInstagram className='text-2xl ' />
                        </SocialButton>
                        <SocialButton>
                            <FaGoogle className='text-2xl ' />
                        </SocialButton>
                        <SocialButton>
                            <FaGoogleWallet className='text-2xl ' />
                        </SocialButton>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <H6 text='Opening Time' color='black' size='text-xl' className='font-medium' />
                    <H6 text='Mon - Fri: 8AM - 10PM' size='text-sm' className='my-5' />
                    <H6 text='Sat: 9AM-8PM' size='text-sm' className='my-5' />
                    <H6 text='Sun: Closed' size='text-sm' className='my-5' />
                </div>
            </div>
        </div>
    )
}
