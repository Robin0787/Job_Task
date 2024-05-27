import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center py-[20px] lg:py-[50px]">
      <section>
        <img src={logo} alt="logo" className="size-[60px] lg:size-[105px]" />
      </section>

      <section className="hidden xl:block">
        <ul className="flex justify-center items-center gap-[60px]">
          <li>
            <button className="navLink">Home</button>
          </li>
          <li>
            <button className="navLink">About Us</button>
          </li>
          <li>
            <button className="navLink">Services</button>
          </li>
          <li>
            <button className="navLink">Track Records</button>
          </li>
          <li>
            <button className="navLink">Media</button>
          </li>
          <li>
            <button className="navLink">Contacts</button>
          </li>
          <li>
            <button className="primaryBtn">Order Service</button>
          </li>
        </ul>
      </section>
      <section className="xl:hidden">
        <button
          className="cursor-pointer"
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <FaBars size={16} />
        </button>
        <article
          className={`absolute w-0 top-0 right-0 ${
            openMenu ? "w-[360px]" : "w-0 overflow-hidden"
          } duration-500`}
        >
          <div className="w-full bg-white shadow-2xl h-screen py-8 px-5 flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center gap-1">
              <h1 className="text-2xl text-center">Menu</h1>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                <FaX size={16} />
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center gap-3">
              <li>
                <button className="navLink">Home</button>
              </li>
              <li>
                <button className="navLink">About Us</button>
              </li>
              <li>
                <button className="navLink">Services</button>
              </li>
              <li>
                <button className="navLink">Track Records</button>
              </li>
              <li>
                <button className="navLink">Media</button>
              </li>
              <li>
                <button className="navLink">Contacts</button>
              </li>
              <li>
                <button className="primaryBtn">Order Service</button>
              </li>
            </ul>
            <div></div>
          </div>
        </article>
      </section>
    </nav>
  );
};

export default Navbar;
