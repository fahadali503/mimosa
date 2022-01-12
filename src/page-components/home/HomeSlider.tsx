import React from 'react'
import Carousel from 're-carousel';
import { homePageSliders } from '../../../utils/images.links';




const slides = [
    {
        title: 'NEW ARRIVALS!',
        description: 'We crack for this purely rock style with stitched quills in relief and metallic hardware.',
        imageUrl: homePageSliders.slider2,
        collectionName: "CLOTHING",
        fashion: "SUMMER FASHION",
        titleColor: "#3d4760",

    },
    {
        title: 'CLEAN & ELEGANT!',
        description: 'BlackBird collection of minimal, sleek and functional Carryalls were designed with creatives in mind.',
        collectionName: "T-SHIRT",
        fashion: "MODERN FASHION",
        imageUrl: homePageSliders.slider1,
        titleColor: "#3d4760"
    }
];

interface IHomeSliderProps {

}

export const HomeSlider = () => {
    return (
        <Carousel auto loop interval={4000}>
            {
                slides.map(slide => {
                    return <div className='h-full ' style={{ background: `url(${slide.imageUrl}) no-repeat center center `, backgroundSize: 'cover' }} key={slide.title}>
                        <div className='pl-24 font-poppins font-bold pt-32'>
                            <div>
                                <div className='text-xs font-semibold'>{slide.collectionName}</div>
                                <div className='text-xs font-semibold'>{"NEW COLLECTION"}</div>
                            </div>
                            <div className='mt-20'>
                                <div className='font-normal tracking-widest text-3xl' style={{ color: slide.titleColor }}>{slide.title}</div>

                                <div className='font-extrabold tracking-widest text-6xl' style={{ color: slide.titleColor }}>{slide.fashion}</div>

                                <div className='font-normal w-2/5 pt-10 tracking-wide text-sm' style={{ color: slide.titleColor }}>{slide.description}</div>

                            </div>
                        </div>
                    </div>
                })
            }
        </Carousel>
    )
}
