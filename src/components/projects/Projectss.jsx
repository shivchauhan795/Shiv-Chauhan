import Project1 from '../../assets/landing/project1.svg';
const Projectss = () => {
    const projects = [
        {
            id: 1,
            title: "Ottermap Website design",
            description1: "The revamped website design help Ottermap achieved",
            description2: "80% of new customer retention",
            github: "https://github.com/shivchauhan795/ottermap-website",
            live: "https://www.ottermap.com/",
            image: Project1
        },
    ];
    return (
        <div className="myfont px-20 max-lg:px-10 mt-24">
            <div className="font-semibold text-4xl max-lg:text-2xl text-[#000000] mb-12">
                My more Projects
            </div>
            <div className='flex flex-col gap-20 max-sm:gap-10'>
                {
                    projects.map((project) => (
                        <div id={project.id} className='bg-[#04471E] px-16 max-sm:px-5 py-14 max-sm:py-8 rounded-3xl flex max-lg:flex-col max-lg:gap-10 items-center justify-evenly'>
                            <div className='w-1/2 max-lg:w-full flex flex-col justify-center'>
                                {/* <div className='text-base max-lg:text-sm max-sm:text-xs font-medium text-white pb-16 max-sm:pb-8'>
                            15 min read
                        </div> */}
                                <div className='font-semibold text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-lg text-white w-[45%] max-sm:w-full pb-6'>
                                    {project.title}
                                </div>
                                <div className='text-xl max-xl:text-lg max-lg:text-base max-sm:text-sm font-normal text-white w-[78%] pb-7'>
                                    <span className='opacity-50 pr-1'>
                                        {project.description1}
                                    </span>
                                    <span>
                                        {project.description2}
                                    </span>
                                </div>
                                <div className='flex gap-6 items-center max-lg:gap-2 justify-start'>

                                    <div onClick={() => { window.open(`${project.github}`, '_blank') }} className='text-xs max-lg:text-[10px] font-semibold rounded-full bg-white w-fit py-3 px-11 max-lg:py-2 max-lg:px-8 text-nowrap cursor-pointer'>
                                        View Github
                                    </div>
                                    <div onClick={() => { window.open(`${project.live}`, '_blank') }} className='text-xs max-lg:text-[10px] font-semibold rounded-full bg-white w-fit py-3 px-8 max-lg:py-2 max-lg:px-5 text-nowrap cursor-pointer'>
                                        View live project
                                    </div>
                                </div>
                            </div>
                            <div className='max-lg:w-full flex items-center justify-center'>
                                <img src={project.image} alt="" />
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Projectss
