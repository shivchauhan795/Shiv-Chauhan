import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import Projectss from '../../components/projects/Projectss'
import { useEffect } from 'react'

const Projects = () => {
  useEffect(() => {
    window.scroll(0, 0);
  })
  return (
    <div>
      <Navbar />
      <Projectss />
      <Footer />
    </div>
  )
}

export default Projects
