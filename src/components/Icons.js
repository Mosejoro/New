import React, { useEffect } from 'react';
import hero1 from './media/institute.jpeg';
import hero2 from './media/cathedral2.jpeg';

const Icons = () => {
    useEffect(() => {
        const hero1Element = document.querySelector('.hero1');
        const hero2Element = document.querySelector('.hero2');

        // Trigger reflow to restart the animation
        hero1Element.classList.remove('animate');
        hero2Element.classList.remove('animate');

        // Add animation class after a small delay
        setTimeout(() => {
            hero1Element.classList.add('animate');
            hero2Element.classList.add('animate');
        }, 100);
    }, []);

    return (
        <div className='w-screen h-screen hidden md:grid grid-cols-2 grid-rows-2 absolute icons'>
            <div className='absolute md:top-20 md:left-4 lg:top-12 lg:left-4 xl:top-16 xl:left-12 m-4 p-4 bg-white rounded-full md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] flex justify-center items-center hero1'></div>
            <div className='absolute md:top-[80px] md:right-12 lg:top-80 lg:right-12 xl:top-80 xl:right-20 m-4 p-4 text-white rounded-full md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] flex justify-center items-center text-center md:text-md lg:text-2xl bg-[#35bc3d] lg:font-bold md:font-light'>The Africa Digital Excellence Awards 2024</div>
            <div className='absolute md:top-80 md:right-4 lg:top-16 lg:right-12 xl:bottom-0 xl:right-20 m-4 p-4 bg-white rounded-full md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] flex justify-center items-center hero2'></div>
            <div className='absolute md:bottom-16 md:left-8 lg:bottom-16 lg:left-8 xl:bottom-16 xl:left-40 m-4 p-4 text-white rounded-full md:h-[120px] md:w-[120px] lg:h-[200px] lg:w-[200px] flex justify-center items-center text-center md:text-md lg:text-2xl bg-[#35bc3d] lg:font-bold md:font-light'>African Business Dinner Night</div>
        </div>
    );
}

export default Icons;
