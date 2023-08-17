import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-black/70 p-16 px-8">
      <div className="mx-auto flex max-w-[1150px] text-blue-100 flex-col justify-between gap-8 md:flex-row">
        {/* left */}
        <div className="mr-10 flex items-center space-x-3">
          <img src={logo} alt="NFtizeMarket" className="w-[240px]" />
        </div>
        {/* center */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="mb-4 text-left text-xl font-bold">
              Links
            </h2>
            <ul className="space-y-2 text-left text-blue-200">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/seller">Become a Seller</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-left text-xl font-bold">
              Help
            </h2>
            <ul className="space-y-2 text-left text-blue-200">
              <li>
                <Link to="/payment">Payment Options</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-4">
          <h2 className="mb-4 text-left text-xl font-bold">
            Newsletter
          </h2>
          {/* input and subscribe button */}
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="searchNFT"
              className="bg-black/30 w-full rounded-sm border-b border-gray-800 p-2 px-4
               text-gray-800 outline-none placeholder:text-blue-300"
            />
            <button className="border-b border-gray-800 p-1 hover:text-gray-700 text-highlight">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
