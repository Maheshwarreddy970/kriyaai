import React from 'react'
import { icons } from '../../icons/index';
import Image from 'next/image';
import data from '@/data/index.json';
import InteractiveHoverButton from './getstartedbutton';

export default function Calltoaction() {
    return (
        <section className='  relative max-w-6xl mx-auto py-20 px-10  shadow-md  my-20 border rounded-3xl'>
            <div className='absolute    top-0 left-0 -z-10 h-full w-full '>
                <icons.lightarrays className='w-full absolute mt-[-5rem] md:mt-[-15rem] xl:mt-[-9rem] '></icons.lightarrays>
                <div className="   rounded-3xl border h-full w-full bg-custom-gradient"></div>
                <Image alt='cloud' height={100} width={100} src={'/Cloud.png'} className='rounded-3xl absolute   w-full h-auto bottom-0'></Image>
                <div className=' bg-black/5 absolute top-0 rounded-3xl w-[100%] h-full z-[0]'></div>
            </div>
            <div className=" flex  flex-col items-center text-white  gap-6 justify-center ">
                <p className=" text-center font-bold text-7xl  max-w-6xl">Ready to Transform Your Social Media?</p>
                <p className=' text-center max-w-3xl'> Sign up today and experience the power of AI-driven engagement!</p>
                <div className=' flex items-center gap-4 '>

                <div className="relative justify-center text-black ">
                    <InteractiveHoverButton text='Get Started' />
                </div>
                <div className="relative justify-center text-white ">
                    <InteractiveHoverButton className=' bg-black ' theam='black' text='Learn More' />
                </div>
                </div>
            </div>
        </section>
    )
}
