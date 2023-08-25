import Header from "../components/Header";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Navbar from "../components/Navbar";

const Heading = () => {
  return (
    <div className="bg-primary text-white sm:p-8 p-2 py-4 h-screen bg-[url('./assets/images/heading.jpg')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <Header />
      <a href="#service">
        <div className="absolute bottom-0 left-1/2 flex justify-center pb-8 translate-x-[-50%]">
          <MdOutlineKeyboardArrowDown className="text-white text-4xl hover:scale-110 hover:border-white hover:border-2  rounded-full p-1 cursor-pointer ease-in-out duration-200" />
        </div>
      </a>
    </div>
  );
};

export default Heading;
