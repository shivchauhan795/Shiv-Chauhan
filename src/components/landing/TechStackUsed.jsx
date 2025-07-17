import apple from '../../assets/landing/techstackused/apple.svg';
import aws from '../../assets/landing/techstackused/aws.svg';
import bootstrap from '../../assets/landing/techstackused/bootstrap.svg';
import c from '../../assets/landing/techstackused/c.svg';
import cpp from '../../assets/landing/techstackused/c++.svg';
import css from '../../assets/landing/techstackused/css.svg';
import docker from '../../assets/landing/techstackused/docker.svg';
import figma from '../../assets/landing/techstackused/figma.svg';
import firebase from '../../assets/landing/techstackused/firebase.svg';
import git from '../../assets/landing/techstackused/git.svg';
import github from '../../assets/landing/techstackused/github.svg';
import html from '../../assets/landing/techstackused/html.svg';
import javascript from '../../assets/landing/techstackused/javascript.svg';
import mongodb from '../../assets/landing/techstackused/mongodb.svg';
import mui from '../../assets/landing/techstackused/mui.svg';
import mysql from '../../assets/landing/techstackused/mysql.svg';
import nextjs from '../../assets/landing/techstackused/nextjs.svg';
import nodejs from '../../assets/landing/techstackused/nodejs.svg';
import postgresql from '../../assets/landing/techstackused/postgresql.svg';
import prisma from '../../assets/landing/techstackused/prisma.svg';
import reactjs from '../../assets/landing/techstackused/reactjs.svg';
import redux from '../../assets/landing/techstackused/redux.svg';
import tailwindcss from '../../assets/landing/techstackused/tailwindcss.svg';
import typescript from '../../assets/landing/techstackused/typescript.svg';

import Marquee from "react-fast-marquee";

const images1 = [
  apple, aws, bootstrap, c, cpp, css, docker, figma, firebase, git, github, html

]
const images2 = [
  javascript, mongodb, mui, mysql, nextjs, nodejs, postgresql, prisma, reactjs,
  redux, tailwindcss, typescript
]

const TechStackUsed = () => {
  return (
    <div className=''>
      <div className='font-semibold myfont text-3xl max-lg:text-xl mb-16 mt-32 px-20 max-sm:px-10'>
        The Tech Stack i usually used in my workflow.
      </div>
      <div className='bg-[#FAFAFA] px-10 py-10 flex flex-col gap-20'>
        {
          <>
            <Marquee autoFill pauseOnHover direction='left' className='flex gap-36'>
              <div className='flex gap-36'>
                {images1.map((image, index) => {
                  return (
                    <img src={image} alt={image} key={index} className='w-20 h-20' />
                  )
                })}
              </div>
            </Marquee>
            <Marquee autoFill pauseOnHover direction='right' className='flex gap-36'>

              <div className='flex gap-36'>
                {images2.map((image, index) => {
                  return (
                    <img src={image} alt={image} key={index} className='w-20 h-20' />
                  )
                })}
              </div>
            </Marquee>
          </>
        }
      </div>
    </div>
  )
}

export default TechStackUsed





