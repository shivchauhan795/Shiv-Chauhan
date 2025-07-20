import { useEffect } from 'react'
import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import BottomBanner from '../../components/landing/BottomBanner'
import Hero from '../../components/landing/Hero'
import Projects from '../../components/landing/Projects'
import TechStackUsed from '../../components/landing/TechStackUsed'
import Testimonials from '../../components/landing/Testimonials'

const Landing = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <TechStackUsed />
            {/* <Testimonials /> */}
            <BottomBanner />
            <Footer />
        </div>
    )
}

export default Landing
