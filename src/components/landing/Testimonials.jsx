import React from 'react'

const Testimonials = () => {
    return (
        <div className='mt-44 max-sm:mt-24 mb-10 px-20 max-sm:px-10 myfont'>
            <div className='text-center max-sm:text-left text-3xl max-xl:text-2xl max-sm:text-xl font-semibold mb-20'>
                What people are saying
            </div>
            <div className='bg-[#FFFDE1] bg-opacity-30 rounded-3xl py-16 max-sm:py-10 px-20 max-lg:px-8 flex flex-col gap-20'>
                <div className='flex max-lg:flex-col items-start gap-10'>
                    <div className='w-[20%] max-lg:w-[50%] max-sm:w-full h-56 border border-black rounded-2xl bg-[#848080]'>

                    </div>
                    <div className='w-[80%] max-lg:w-full'>
                        <div className='text-2xl max-xl:text-xl max-lg:text-lg max-sm:text-sm font-medium mb-14 max-sm:mb-4'>
                            John Rastogi, Founder at Rastogi Enterprise
                        </div>
                        <div className='text-lg max-xl:text-base max-lg:text-sm max-sm:text-xs font-normal'>
                            I had worked with shive in the past projects, he is very hardwork and enthusiast person. Whether its solving problem, doing new things or taking initiative in the team, he is always on the front.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
