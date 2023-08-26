import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="xl:px-48 phone:px-16 px-8 py-20 bg-primary text-white grid sm:grid-cols-3 items-start justify-between sm:gap-16 gap-10">
      <div className="flex flex-col gap-4">
        <img src={logo} alt="logo" className="w-48" />
        <p className="text-sm">
          Zdobądź swój wymarzony samochód razem z Muscle Imports, Twoją bramą do
          wyjątkowych pojazdów importowanych z USA.
        </p>
        <div className="flex gap-6 mt-4">
          <div className="bg-white text-primary flex justify-center items-center  p-4 rounded-full hover:bg-slate-200 cursor-pointer">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="bg-white text-primary flex justify-center items-center p-4 rounded-full hover:bg-slate-200 cursor-pointer">
            <FaInstagram className="text-2xl" />
          </div>
          <div className="bg-white text-primary flex justify-center items-center p-4 rounded-full hover:bg-slate-200 cursor-pointer">
            <FaTwitter className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Pomoc</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-sm hover:text-slate-200">
            <a href="">O nas</a>
          </li>
          <li className="text-sm hover:text-slate-200">
            <a href="">Najczęściej zadawane pytania</a>
          </li>
          <li className="text-sm hover:text-slate-200">
            <a href="">Jak to działa</a>
          </li>
          <li className="text-sm hover:text-slate-200">
            <a href="">Polityka prywatności</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold">Kontakt</h4>
        <ul className="flex flex-col gap-2">
          <li className="text-sm">782-748-757</li>
          <li className="text-sm">muscle@imports.com</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
