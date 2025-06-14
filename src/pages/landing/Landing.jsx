import Footer from '../../components/common/Footer'
import Navbar from '../../components/common/Navbar'
import Hero from '../../components/landing/Hero'
import Projects from '../../components/landing/Projects'
import Testimonials from '../../components/landing/Testimonials'

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Projects />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Landing
