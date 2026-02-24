import TextHoverEffect from '@/components/common/textHoverEffect';
import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className='relative h-[70vh] w-full text-white flex flex-col items-center justify-center'>
            <div className='absolute w-full h-[calc(100vh+12vh)] md:h-[calc(100vh+17vh)] lg:h-[calc(100vh+5vh)]'>
                <div className='body'>
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className='text-center absolute z-10'>
                <div className='scale-120 lg:scale-150'>
                    <TextHoverEffect text='404' />
                </div>
                <div className='text-xl'>
                    Wrong turn. But hey, curiosity is a good sign.
                </div>
            </div>
        </div>
    )
}

export default NotFound