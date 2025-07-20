import { useEffect } from "react"
import Hero from "../../components/about/Hero"
import Story from "../../components/about/Story"
import Footer from "../../components/common/Footer"
import Navbar from "../../components/common/Navbar"


const About = () => {
    useEffect(() => {
        window.scroll(0, 0);
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <Story />
            <Footer />
        </div>
    )
}

export default About
