import Header from "../components/Header";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Navbar from "../components/Navbar";

const Heading = () => {
  return (
    <div className="bg-primary text-white p-8 h-screen bg-[url('./assets/images/heading.jpg')] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <Header />
      <div className="absolute bottom-0 left-1/2 flex justify-center  pb-8">
        <MdOutlineKeyboardArrowDown className="text-white text-4xl hover:scale-110 hover:border-white hover:border-2  rounded-full p-1 cursor-pointer ease-in-out duration-200" />
      </div>
    </div>
  );
};

export default Heading;
