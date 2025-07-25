import Project1 from '../../assets/project/ottermapWebsite.png';
import Project2 from '../../assets/project/ottermapPlatform.svg';
import Project3 from '../../assets/project/secondBrain.png';
import Project4 from '../../assets/project/chatApp.png';
import Project5 from '../../assets/project/enlacee.png';
import Project6 from '../../assets/project/selectify.png';
import Project7 from '../../assets/project/eventoz.png';
import Project8 from '../../assets/project/qrTextify.png';
import Project9 from '../../assets/project/cseNotes.png';
const Projectss = () => {
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
        {
            id: 3,
            title: "Second Brain",
            description1: "A centralized link manager for",
            description2: "saving and organizing useful web links.",
            github: "https://github.com/shivchauhan795/second-brain",
            live: "https://second-brain.shivchauhan.com/",
            cardColor: "#bc7afa",
            borderColor: "#a346fa",
            textColor: "black",
            image: Project3
        },
        {
            id: 4,
            title: "Chat App",
            description1: "A Chat Application where we can",
            description2: "create room for chatting.",
            github: "https://github.com/shivchauhan795/chat-app/",
            live: "https://chat.shivchauhan.com/",
            cardColor: "#d9cfa3",
            borderColor: "#f5f2d5",
            textColor: "black",
            image: Project4
        },
        {
            id: 5,
            title: "Enlacee",
            description1: "Your own",
            description2: "URL Shortener.",
            github: "https://github.com/shivchauhan795/Enlacee",
            live: "https://enlacee.vercel.app/",
            cardColor: "#9b6e46",
            borderColor: "#bc8e66",
            textColor: "white",
            image: Project5
        },
        {
            id: 6,
            title: "Selectify",
            description1: "A Tool that helps",
            description2: "photographers to get photos selected.",
            github: "https://github.com/shivchauhan795/Selectify",
            live: "https://selectify.netlify.app/",
            cardColor: "#334155",
            borderColor: "#9ba8bf",
            textColor: "white",
            image: Project6
        },
        {
            id: 7,
            title: "Eventoz",
            description1: "Your own",
            description2: "Event Handler.",
            github: "https://github.com/shivchauhan795/Eventoz",
            live: "https://eventoz.netlify.app/",
            cardColor: "#334155",
            borderColor: "#9ba8bf",
            textColor: "white",
            image: Project7
        },
        {
            id: 8,
            title: "QR Textify",
            description1: "A tool  to convert",
            description2: "text into custom QR code.",
            github: "https://github.com/shivchauhan795/QR-Textify",
            live: "https://shivchauhan795.github.io/QR-Textify/",
            cardColor: "#9b98e9",
            borderColor: "#8f8bfc",
            textColor: "black",
            image: Project8
        },
        {
            id: 9,
            title: "CSE Notes",
            description1: "Notes Application for CSE Students.",
            description2: "More than 10,000+ downloads.",
            github: "https://github.com/shivchauhan795/CSE-Notes",
            live: "https://play.google.com/store/apps/details?id=com.shivchauhan.csenotes&hl=en_IN&gl=US",
            cardColor: "#f99c6e",
            borderColor: "#fa8c55",
            textColor: "black",
            image: Project9
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
        </div>
    )
}

export default Projectss
