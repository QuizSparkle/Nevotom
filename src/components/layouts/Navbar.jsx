import React, { useState } from "react";
import { SiConstruct3 } from "react-icons/si";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaWallet } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-[#444444] px-4 py-6 text-gray-100 lg:px-7">
      <div className="flex items-center justify-between">
        {/* left */}
        <img src={logo} alt="NFtizeMarket" className="w-[210px]" />
        {/* right */}
        <div className="hidden w-full md:flex xl:w-[60%]">
          {/* navlinks */}
          <div className="ml-4 flex items-center space-x-4 text-lg text-white xl:text-xl">
            <ScrollLink className="cursor-pointer hover:text-gray-200">
              Home
            </ScrollLink>
            <ScrollLink className="cursor-pointer hover:text-gray-200">
              Buy
            </ScrollLink>
            <ScrollLink className="cursor-pointer hover:text-gray-200">
              About
            </ScrollLink>
          </div>
          {/* search bar */}
          <div className="mx-6 flex-1">
            <input
              type="search"
              placeholder="searchNFT"
              className="w-full rounded-sm bg-black/10 p-2 px-4
               text-white outline-none placeholder:text-blue-200"
            />
          </div>
          {/* right-right */}
          <div className="flex space-x-3">
            <button
              className="flex items-center rounded-md 
          bg-primary p-2 px-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>
                <FaWallet className="mr-2 text-xl text-white" />
              </span>{" "}
              Connect Wallet
            </button>
            <Link>
              <HiShoppingCart className="text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link>
              <RiAccountCircleFill className="text-3xl text-white hover:text-gray-200" />
            </Link>
          </div>
        </div>
        <button
          className="block p-2 transition-all ease-linear md:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoMdClose size={"44"} /> : <HiOutlineMenuAlt3 size={"44"} />}
        </button>
      </div>
      {/* navbar for smaller screens */}
    </nav>
  );
};

export default Navbar;
