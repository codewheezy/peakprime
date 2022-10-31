const Services = () => {
  return (
    <div className="flex pt-20 flex-col">
      <div className="flex-col flex items-center">
        <h3 className="text-center font-semibold text-4xl text-[#0A0F29]">What We Do</h3>
        <p className="text-center font-normal text-base text-[#0A0F29] mt-1">Here’s how we can help you achieve your business goals</p>
        <div className="border-[3px] border-[#F6BF2F] w-24 mt-3"></div>
      </div>
      <section className="flex flex-col px-4 mx-auto lg:max-w-6xl md:px-8 md:py-16">
      <div className="flex justify-between items-center">
        <div className="w-[45%] bg-[#D4D9E8] flex items-center justify-center md:h-[344px] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <img src="img/web-programming.png" alt="laptop" />
        </div>
        <div className="w-[45%]">
          <h4 className="font-semibold text-2xl text-[#0A0F29] mb-2">Web Design & Development</h4>
          <p className="font-normal text-sm text-[#0A0F29] break-words">Get a professional responsive website that establishes your brand as an authority in your field and converts your visitors to clients</p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center pt-14">
        <div className="w-[45%] bg-[#E8DDC0] flex items-center justify-center md:h-[344px] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <img src="img/bullhorn.png" alt="laptop" />
        </div>
        <div className="w-[45%]">
          <h4 className="font-semibold text-2xl text-[#0A0F29] mb-2">Digital Marketing</h4>
          <p className="font-normal text-sm text-[#0A0F29] break-words">Harness the power of strategic organic and inorganic marketing to multiply your customer or client base online</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-14">
        <div className="w-[45%] bg-[#D4D9E8] flex items-center justify-center md:h-[344px] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <img src="img/seo.png" alt="laptop" />
        </div>
        <div className="w-[45%]">
          <h4 className="font-semibold text-2xl text-[#0A0F29] mb-2">Search Engine Optimization</h4>
          <p className="font-normal text-sm text-[#0A0F29] break-words">Get your website and google business page to rank higher on search engines so your customers will see you when they google</p>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-between items-center pt-14">
        <div className="w-[45%] bg-[#E8DDC0] flex items-center justify-center md:h-[344px] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <img src="img/smartphone.png" alt="laptop" />
        </div>
        <div className="w-[45%]">
          <h4 className="font-semibold text-2xl text-[#0A0F29] mb-2">App Design & Development</h4>
          <p className="font-normal text-sm text-[#0A0F29] break-words">UX/UI design and development of custom apps to bring your ideas to life, or perform specific tasks for your business</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-14">
        <div className="w-[45%] bg-[#D4D9E8] flex items-center justify-center md:h-[344px] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <img src="img/consulting.png" alt="laptop" />
        </div>
        <div className="w-[45%]">
          <h4 className="font-semibold text-2xl text-[#0A0F29] mb-2">Consultancy</h4>
          <p className="font-normal text-sm text-[#0A0F29] break-words">Discuss with a professional, brainstorm and get a tailored strategy to achieve your unique business goals</p>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Services;