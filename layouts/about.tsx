const About = () => {
  return(
  <section className="flex flex-col items-center pt-[5em] pb-[6em]">
    <div className="w-full">
        <div className='flex flex-col items-center'>
            <h3 className="text-center font-semibold text-4xl text-[#0A0F29]">Who We are</h3>
            <p className="text-center text-base font-normal w-[40%] break-words">We’re a team of skilled professionals with experience in helping businesses achieve
                massive growth online</p>
            <div className="border-[3px] border-[#F6BF2F] w-24 mt-3"></div>
        </div>
        <div className="flex flex-row justify-between px-4 mx-auto lg:max-w-6xl md:px-8">
            <div className="flex flex-col pt-[66px] px-[48px] items-center">
                <img className="w-[168px] h-[168px] rounded-full" src="/img/Uche's_picture.png" alt="profile"/>
                <h3 className="text-center mt-[1em] text-2xl font-semibold">Uche Kennedy</h3>
                <p className="text-base font-normal">Developer/Programmer</p>
            </div>
            <div className="flex flex-col pt-[66px] px-[48px] items-center">
                <img className="w-[168px] h-[168px] rounded-full" src="/img/Daisyphoto.png" alt="daisy"/>
                <h3 className="text-center mt-[1em] text-2xl font-semibold">Daisy Ogelenya</h3>
                <p className="text-base font-normal">UI/UX Designer, SEO Specialist</p>
            </div>
            <div className="flex flex-col pt-[66px] px-[48px] items-center">
                <img className="w-[168px] h-[168px] rounded-full" src="/img/David.jpeg" alt="profile"/>
                <h3 className="text-center mt-[1em] text-2xl font-semibold">David Naza</h3>
                <p className="text-base font-normal">Digital Marketing Specialist</p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default About;