import React from 'react'
import { icons } from '../../icons/index';
import Image from 'next/image';
import data from '@/data/index.json';
import InteractiveHoverButton from './getstartedbutton';
import { HeroVideoDialog } from '../ui/hero-video-dialog';

export default function Herosection() {
    return (
        <div className=" relative h-[140vh] pt-36 mb-80">
            <div className='absolute   px-7 top-0 left-0 -z-10 h-full w-full '>
                <icons.lightarrays className='w-full absolute mt-[-5rem] md:mt-[-15rem] xl:mt-[-9rem] '></icons.lightarrays>
                <div className="   rounded-b-3xl border h-full w-full bg-custom-gradient"></div>
                <Image alt='cloud' height={100} width={100} src={'/Cloud.png'} className='rounded-b-3xl absolute   w-full h-auto bottom-0'></Image>
                <div className=' bg-black/5 absolute top-0 rounded-b-3xl w-[96.3%] h-full z-[0]'></div>
            </div>

            <div className=" flex  flex-col items-center text-white  gap-6 justify-center ">
                <div className=' flex items-center gap-1 px-5 py-1 border shadow text-sm bg-white/80 text-neutral-800 rounded-full' >
                    <icons.aistars ></icons.aistars>
                    {data.landingPage.sections[0].content.heroTagline}
                </div>
                <p className=" text-center font-bold text-7xl  max-w-6xl">{data.landingPage.sections[0].content.heading}</p>
                <p className=' text-center max-w-3xl'> {data.landingPage.sections[0].content.subheading}</p>
                <div className="relative justify-center text-black ">
                    <InteractiveHoverButton text='Get Started' />
                </div>
            </div>
            <div className=" mt-20 max-w-5xl mx-auto  relative bg-black/5 shadow-inner shadow-white backdrop-blur-lg p-5 rounded-xl">
                <HeroVideoDialog
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="/videoimage.avif"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    )
}
