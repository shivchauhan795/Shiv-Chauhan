import Project1 from '../../assets/landing/project1.svg';

const Projects = () => {
    return (
        <div className='pt-1 px-20 max-sm:px-10 pb-1 myfont'>
            <div className='font-semibold text-3xl max-xl:text-2xl max-sm:text-xl pb-12'>
                Projects I worked on
            </div>
            <div className='flex flex-col gap-20 max-sm:gap-10'>
                <div className='bg-[#04471E] px-16 max-sm:px-5 py-14 max-sm:py-8 rounded-3xl flex max-lg:flex-col max-lg:gap-10 items-start justify-between'>
                    <div className='w-1/2 max-lg:w-full flex flex-col justify-center'>
                        <div className='text-base max-lg:text-sm max-sm:text-xs font-medium text-white pb-16 max-sm:pb-8'>
                            15 min read
                        </div>
                        <div className='font-semibold text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-lg text-white w-[45%] max-sm:w-full pb-6'>
                            Ottermap Website design
                        </div>
                        <div className='text-xl max-xl:text-lg max-lg:text-base max-sm:text-sm font-normal text-white w-[78%] pb-7'>
                            <span className='opacity-50 pr-1'>
                                The revamped website design help Ottermap achieved
                            </span>
                            <span>
                                80% of new customer retention
                            </span>
                        </div>
                        <div className='text-xs font-semibold rounded-full bg-white w-fit py-3 px-8'>
                            View Project
                        </div>
                    </div>
                    <div className='w-1/2 max-lg:w-full flex items-center justify-center'>
                        <img src={Project1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
