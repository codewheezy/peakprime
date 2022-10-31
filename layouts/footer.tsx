import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn }  from "react-icons/fa";

const Footer = () => {
  return(
    <footer className="bg-[#2F66F6]">
      <section className="flex flex-col py-10 px-4 mx-auto lg:max-w-6xl md:px-8">
        <div className="flex flex-row">
          <div className="basis-1/4 text-left border-r">
            <p className="block mb-4 w-[176px] h-[51px] text-center">
              <img className="w-full h-full" src="/img/white-logo.svg" title="white-peakprime" />
            </p>
            <p className="text-xl mb-4 text-left text-white font-bold tracking-[1.34px]">Simplify your <br /> Translations Now!</p>
            <button className="bg-white py-3 px-14 text-[#2F66F6] font-medium text-base shadow-[0px 4px 8px rgba(10, 15, 41, 0.05)]">Get Started</button>
          </div>
          <div className="flex flex-row grow justify-between px-12 py-4 text-white">
            <ul className="text-left">
              <li className="pb-[15px]">
                <strong className="text-[1.1rem] font-bold">What We Do</strong>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Web Design & Development</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Digital Marketing</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Search Engine Optimization</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">App Design & Development</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Consultancy</a>
              </li>
            </ul>

            <ul>
              <li className="pb-[15px]">
                <strong className="text-[1.1rem] font-bold">Industry We Serve</strong>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Oil and Gas</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Finance</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Healthcare</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Retail/Ecommerce</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Transportation & Logistic</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Education</a>
              </li>
              <li className="pb-[15px] text-[.88rem]">
                <a href="#">Manufacturing</a>
              </li>
            </ul>

            <ul>
              <li className="pb-[15px]">
                <strong className="text-[1.1rem] font-bold">Contact Us</strong>
              </li>
              <li className="flex flex-col">
                <strong className="pb-[15px] text-[.88rem]">For Sale:-</strong>
                <a className="pb-[15px] text-[.88rem]" href="#">sales@peakprime.com</a>
              </li>
              <li className="flex flex-col">
                <strong className="pb-[15px] text-[.88rem]">For Career:-</strong>
                <a className="pb-[15px] text-[.88rem]" href="#">hr@peakprime.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <ul className="flex">
            <li >
              <a className="inline-flex w-[40px] h-[40px] rounded-full items-center border border-white justify-center ml-[15px] text-white" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
            <a className="inline-flex w-[40px] h-[40px] rounded-full items-center border border-white justify-center ml-[15px] text-white" href="#">
              <FaTwitter />
            </a>
            </li>
            <li>
            <a className="inline-flex w-[40px] h-[40px] rounded-full items-center border border-white justify-center ml-[15px] text-white" href="#">
              <FaInstagram />
            </a>
            </li>
            <li>
            <a className="inline-flex w-[40px] h-[40px] rounded-full items-center border border-white justify-center ml-[15px] text-white" href="#">
              <FaLinkedinIn />
            </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-white text-[.88rem] pt-[20px]">© 2022 peakprime. All Rights Reserved.</p>
        </div>
      </section>
    </footer> 
  )
}

export default Footer;