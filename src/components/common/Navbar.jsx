import { Link } from "react-router-dom";

const Navbar = () => {
    const pathname = window.location.pathname;
    return (
        <div className='myfont flex items-center justify-between pt-7 px-20 max-sm:px-10'>
            <div className="uppercase text-xl max-sm:text-sm font-bold text-[#000000]">shiv chauhan</div>
            <div className="text-sm max-sm:text-xs font-medium flex gap-5 items-center">
                <Link to={'/work'} className={`text-[#000000] cursor-pointer ${pathname === '/work' ? '' : 'opacity-30'}`}>Work</Link>
                <Link to={'/about'} className={`text-[#000000] cursor-pointer ${pathname === '/about' ? '' : 'opacity-30'}`}>About</Link>
                <Link target="_blank" to={'https://drive.google.com/file/d/1DTd_TmrCjB0y5Xe62AQXcWtTRZO9dd-m/view?usp=sharing'} className={`text-[#000000] cursor-pointer ${pathname === '/resume' ? '' : 'opacity-30'}`}>Resume</Link>
            </div>
        </div>
    )
}

export default Navbar
