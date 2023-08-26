import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4">
      <img src={logo} alt="logo" className="sm:w-60 phone:w-40 w-36 z-50" />
      <ul className="lg:flex hidden space-x-16 text-[1.4rem] ">
        <li>
          <a
            href="#service"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            USŁUGA
          </a>
        </li>
        <li>
          <a
            href="#opinions"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            OPINIE
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            KONTAKT
          </a>
        </li>
      </ul>
      <div className="lg:hidden z-50">
        <button onClick={() => setIsOpen((prev: boolean) => !prev)}>
          {isOpen ? (
            <IoCloseSharp className="text-white text-4xl" />
          ) : (
            <GiHamburgerMenu className="text-white text-4xl " />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden absolute left-0 z-10 bg-primary  w-full h-screen px-16  flex justify-center items-center transition-all duration-500 ease-in  ${
          isOpen ? "top-0" : "top-[-120%]"
        }`}
      >
        <ul className=" text-[1.6rem] text-center">
          <li className="mb-4">
            <a
              href="#service"
              className="text-gray-300 hover:text-white ease-in-out duration-200"
            >
              SERVICES
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#opinions"
              className="text-gray-300 hover:text-white ease-in-out duration-200"
            >
              OPINIONS
            </a>
          </li>
          <li className="mb-4">
            <a
              href="#contact"
              className="text-gray-300 hover:text-white ease-in-out duration-200"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
