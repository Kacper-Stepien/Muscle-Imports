import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4">
      <img src={logo} alt="logo" className="w-60" />
      <ul className="flex space-x-16 text-[1.6rem]">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            OPINIONS
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-white ease-in-out duration-200"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
