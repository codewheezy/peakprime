const Banner = () => {
  return(
    <section className="bg-[url('/img/hero-pattern.png')] bg-cover bg-center md:h-[600px] z-50 bg-[rgba(47, 102, 246, 0.2)]">
        <div className="px-4 mx-auto lg:max-w-6xl flex md:items-center md:flex-row md:px-8 h-full relative">
          <div>
            <h1 className="font-bold text-6xl text-[#0A0F29] break-words max-w-[456px]">Get <span className="text-[#2F66F6]">More Customers & Clients</span> for Your Business</h1>
            <p className="font-normal text-base pt-4 text-[#0A0F29] break-words max-w-[456px]">Get more of your target customers or clients to know, like and patronise or hire you</p>
            <button className="bg-[#2F66F6] py-3 px-14 text-white font-medium text-base mt-14 shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">Get Started</button>
          </div>
          <div className="h-full pt-[7.6%] pl-3">
            <img className="w-full h-full" src="img/hero-image.png" alt="person-img" />
          </div>
        </div>
    </section>
  )
}

export default Banner;