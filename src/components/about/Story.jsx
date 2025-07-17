import Self from '../../assets/self.jpg';
const Story = () => {
    return (
        <div className='mt-24 px-20 max-xl:px-10 myfont'>
            <div  className='w-full h-[600px] max-lg:h-[400px] max-sm:h-[200px] rounded-xl bg-[#D9D9D9]'>
        <img src={Self} alt='self' className='w-full h-full object-scale-down rounded-xl' />
            </div>
            <div className='text-xs max-sm:text-[8px] font-normal mt-5 max-sm:mt-2'>
                Yup, that’s me working at the office. In the zone.
            </div>
            <div className='mt-24 text-start text-3xl max-sm:text-sm font-thin'>
                I was born in Ambala and earned a Bachelor's degree in Computer Science from CGC, Landran. I have worked on various tech-stack and have built projects around the ideas I got exploring around me. I have worked on client projects around the globe that I got through X.
                <br />
                <br />
                My interest in development started in school when I was studying in class 10. Computer lab, different computer accessories always fascinates me. Lab class was my favorite and in class 10 when I reached the lab one fine day, I found something written on a dark blue screen of the monitor. This was the time when my teacher told me about coding and building products through it. Since then I'm working toward my goal to build amazing products. My aim is to build something which will help millions.
                <br/>
                <br/>
                I love to explore things around me whenever I'm free. I usually travel solo, just to watch people, understand the thinking of others. And this habbit just keeps me grounded to the roots.
                <br/>
                <br/>
                
            </div>
        </div>
    )
}

export default Story
