const TrustUs = () => {
  return(
    <section className="bg-[#2F66F6] flex flex-col items-center pt-[3em] pb-[4em]">
      <div className="flex flex-col items-center">
        <h2 className="text-white font-semibold text-4xl">Why You Should Trust Us</h2>
        <div className="border-[3px] border-[#F6BF2F] w-24 mt-3"></div>
      </div>
      <div className="flex flex-row justify-between mt-[45px] px-4 mx-auto lg:max-w-6xl md:px-8">
        <div className="flex w-[32%] h-[300px] flex-col bg-white justify-center items-center shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <div className="flex item-center justify-center rounded-full w-[64px] h-[64px] bg-[#2F66F6] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
            <img src="/img/Vector.svg" alt="icon" />
          </div>
          <h4 className="mt-[26px] text-center text-lg font-semibold">Experience</h4>
          <p className="font-normal text-base text-center mt-[14px] break-words w-[77%]">We have over 10 years combined experience</p>
        </div>
        <div className="flex w-[32%] h-[300px] flex-col bg-white justify-center items-center shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <div className="flex item-center justify-center rounded-full w-[64px] h-[64px] bg-[#2F66F6] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
            <img src="/img/Vector2.svg" alt="icon" />
          </div>
          <h4 className="mt-[26px] text-center text-lg font-semibold">Quality</h4>
          <p className="font-normal text-base text-center mt-[14px] break-words w-[77%]">We use word-class standard in our operation</p>
        </div>
        <div className="flex w-[32%] h-[300px] flex-col bg-white justify-center items-center shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
          <div className="flex item-center justify-center rounded-full w-[64px] h-[64px] bg-[#2F66F6] shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">
            <img src="/img/Time_icon.svg" alt="icon" />
          </div>
          <h4 className="mt-[26px] text-center text-lg font-semibold">Timely Delivery</h4>
          <p className="font-normal text-base text-center mt-[14px] break-words w-[77%]">Beacause we respect your time, we never miss deadlines</p>
        </div>
      </div>
    </section>
  )
}

export default TrustUs;