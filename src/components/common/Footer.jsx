import { Link } from 'react-router-dom'
import Github from '../../assets/footer/github.svg'
import Linkedin from '../../assets/footer/linkedin.svg'
import Twitter from '../../assets/footer/twitter.svg'

const Footer = () => {
    const pathname = window.location.pathname;
    return (
        <div className='mt-52 mb-8 px-20 max-lg:px-10'>
            <div className='flex max-sm:flex-col max-sm:gap-10 items-start justify-between mb-16'>
                <div>
                    <div className='myfont font-semibold text-xl mb-6'>
                        Follow me on
                    </div>
                    <div className='flex gap-4'>
                        <img onClick={() => window.open('https://www.linkedin.com/in/shivchauhan795/')} src={Linkedin} alt="linkedin" className='w-12 h-12 object-contain cursor-pointer' />
                        <img onClick={() => window.open('https://github.com/shivchauhan795/')} src={Github} alt="github" className='w-12 h-12 object-contain cursor-pointer' />
                        <img onClick={() => window.open('https://twitter.com/shivchauhan795')} src={Twitter} alt="twitter" className='w-12 h-12 object-contain cursor-pointer' />
                    </div>
                </div>
                
                <div className='h-40 w-[0.2px] bg-[#C0C0C0] max-sm:hidden'>

                </div>
                <div className="text-sm max-sm:text-xs font-medium flex gap-6 max-lg:gap-2 items-center">
                    <Link to={'/work'} className={`text-[#000000] cursor-pointer ${pathname === '/work' ? '' : 'opacity-30'}`}>Work</Link>
                    <Link to={'/projects'} className={`text-[#000000] cursor-pointer ${pathname === '/projects' ? '' : 'opacity-30'}`}>Projects</Link>
                    <Link to={'/about'} className={`text-[#000000] cursor-pointer ${pathname === '/about' ? '' : 'opacity-30'}`}>About</Link>
                    <Link target="_blank" to={'https://drive.google.com/file/d/1DTd_TmrCjB0y5Xe62AQXcWtTRZO9dd-m/view?usp=sharing'} className={`text-[#000000] cursor-pointer ${pathname === '/resume' ? '' : 'opacity-30'}`}>Resume</Link>
                </div>
            </div>
            <div className='text-center text-black opacity-55 text-sm max-sm:text-[9px] font-normal'>
                © 2025 - Shiv Chauhan. All Right Reserved.
            </div>
        </div>
    )
}

export default Footer
