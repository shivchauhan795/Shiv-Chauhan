import { Link } from 'react-router-dom';
import Project1 from '../../assets/landing/ottermapWebsite.png';
import Project2 from '../../assets/landing/ottermapPlatform.svg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Ottermap Website",
            description1: "The revamped website help Ottermap achieve",
            description2: "70% of new customer retention.",
            github: "none",
            live: "https://www.ottermap.com/",
            cardColor: "#04471E",
            borderColor: "#2184484D",
            textColor: "white",
            image: Project1
        },
        {
            id: 2,
            title: "Ottermap SAAS Platform",
            description1: "The revamped SAAS Platform help Ottermap persists",
            description2: "80% of customer retention.",
            github: "none",
            live: "https://app.ottermap.com/",
            cardColor: "#04471E",
            borderColor: "#2184484D",
            textColor: "white",
            image: Project2
        },
    ];
    return (
        <div className='pt-1 px-20 max-sm:px-10 pb-1 myfont'>
            <div className='font-semibold text-3xl max-xl:text-2xl max-sm:text-xl pb-12'>
                Projects I worked on
            </div>
            <div className='flex flex-col gap-20 max-sm:gap-10'>
                {
                    projects.map((project) => (
                        <div key={project.id} id={project.id} style={{ backgroundColor: project.cardColor }} className={` px-16 max-sm:px-5 py-14 max-sm:py-8 rounded-3xl flex max-lg:flex-col max-lg:gap-10 items-center justify-evenly`}>
                            <div className='w-1/2 max-lg:w-full flex flex-col justify-center'>
                                {/* <div className='text-base max-lg:text-sm max-sm:text-xs font-medium text-white pb-16 max-sm:pb-8'>
                            15 min read
                        </div> */}
                                <div style={{ color: project.textColor }} className={`font-semibold text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-lg text-[${project.textColor}] w-[70%] max-sm:w-full pb-6`}>
                                    {project.title}
                                </div>
                                <div style={{ color: project.textColor }} className={`text-xl max-xl:text-lg max-lg:text-base max-sm:text-sm font-normal text-[${project.textColor}] w-[85%] pb-7`}>
                                    <span className='opacity-50 pr-1'>
                                        {project.description1}
                                    </span>
                                    <span>
                                        {project.description2}
                                    </span>
                                </div>
                                <div className='flex gap-6 items-center max-lg:gap-2 justify-start'>

                                    <div onClick={() => { window.open(`${project.github}`, '_blank') }} className={`text-xs max-lg:text-[9px] font-semibold rounded-full bg-white w-fit py-3 px-11 max-lg:py-2 max-lg:px-8 text-nowrap ${project.github === 'none' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                                        View Github
                                    </div>
                                    <div onClick={() => { window.open(`${project.live}`, '_blank') }} className='text-xs max-lg:text-[9px] font-semibold rounded-full bg-white w-fit py-3 px-8 max-lg:py-2 max-lg:px-5 text-nowrap cursor-pointer'>
                                        View live project
                                    </div>
                                </div>
                            </div>
                            <div className='max-lg:w-full flex items-center justify-center lg:h-[393.75px]'>
                                <img width={568.35} height={393.75} style={{ borderColor: project.borderColor }} className={`border-opacity-90  border-[7.13px] rounded-xl`} src={project.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link to={'/projects'}>
                    <div className='mt-20 bg-[#444444] text-[#ffffff] text-base rounded-md w-fit px-2.5 py-3.5 max-lg:text-xs max-lg:px-4 '>
                        More Projects
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects
