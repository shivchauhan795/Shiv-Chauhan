import React from 'react'
import shiv from '../assets/shiv.jpg'
import linkedin from '../assets/social/linkedin.svg'
import github from '../assets/social/github.svg'

const Home = () => {
  return (

    <div className='flex flex-row justify-evenly items-center py-28' id='home'>

      <div className='flex flex-col gap-5'>
        <div className='flex'>
          <span className='shiv uppercase text-5xl'>
            hi, i am <br></br>
            Shiv Chauhan.
          </span>
        </div>
        <div className='flex flex-row gap-4'>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shivchauhan.contact@gmail.com" target='_blank'><button className='home_contact_button uppercase border rounded-full w-40 h-14 card_border hover:scale-110 transition-all'>contact me</button></a>
          <a href="https://www.linkedin.com/in/shivchauhan795/" target='_blank'><img src={linkedin} alt="linkedin" className='hover:scale-110 transition-all' /></a>
          <a href="https://github.com/shivchauhan795/" target='_blank'><img src={github} alt="github" className='hover:scale-110 transition-all' /></a>
        </div>
      </div>

      <div>
        <img src={shiv} alt="shiv image" className='w-64 h-80 rounded-3xl hover:scale-110 transition-all' />
      </div>
    </div>

  )
}

export default Home