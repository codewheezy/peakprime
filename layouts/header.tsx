import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return(
    <header className="w-full bg-white text-[#0A0F29]">
    <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center sm:flex md:px-8 h-20">
            <div className="flex items-center justify-between h-full">
                <a href="" className="h-7">
                    <img src="img/Logo.png" alt="Peakprime" className="h-full w-full" />
                </a>
                <div className="md:hidden">
                    <div
                        className="text-[#0A0F29]"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                          <FiX size="24px" />
                        ) : (
                          <FiAlignJustify size="24px" />
                        )}
                    </div>
                </div>
            </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-5 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-9 md:space-y-0">
                    <li className="hover:text-[#0A0F29] text-sm font-semibold text-[#0A0F29] flex justify-end">
                        <a href="#">About</a>
                    </li>
                    <li className="text-sm font-semibold hover:text-[#0A0F29] text-[#0A0F29] flex justify-end">
                        <a href="#">Services</a>
                    </li>
                    <li className="text-sm font-semibold hover:text-[#0A0F29] text-[#0A0F29] flex justify-end">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}
export default Header