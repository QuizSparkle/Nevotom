import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { HiShoppingCart } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.png";

// For Web3Modal
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, fantomTestnet, mainnet, polygon } from "wagmi/chains";
import ConnectBtn from "./ConnectBtn";
import { Web3Modal } from "@web3modal/react";

import { useAccount } from "wagmi";

console.log("account : ", useAccount.name);

const chains = [arbitrum, mainnet, polygon, fantomTestnet];

const { publicClient } = configureChains(chains, [
  w3mProvider({ projectId: "edb6828b8024fe4e9f28bfb372f4c88f" }),
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    projectId: "edb6828b8024fe4e9f28bfb372f4c88f",
    version: 2,
    chains,
  }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-[#444444] px-4 py-6 text-white lg:px-7">
      <div className="flex items-center justify-between">
        {/* left */}
        <img src={logo} alt="NFtizeMarket" className="w-[210px]" />
        {/* right */}
        <div className="hidden w-full md:flex xl:w-[60%]">
          {/* navlinks */}
          <div
            className="ml-4 flex items-center space-x-4 text-lg
           text-white xl:text-xl"
          >
            <Link to="/" className="cursor-pointer hover:text-gray-200">
              Home
            </Link>
            <ScrollLink
              to="/toppicks"
              duration={500}
              smooth
              className="cursor-pointer hover:text-gray-200"
            >
              Buy
            </ScrollLink>
            <ScrollLink to="/" className="cursor-pointer hover:text-gray-200">
              About
            </ScrollLink>
          </div>
          {/* search bar */}
          <div className="mx-6 flex-1">
            <input
              type="search"
              placeholder="searchNFT"
              className="w-full rounded-sm bg-white/10 p-2 px-4
               text-white outline-none placeholder:text-gray-200"
            />
          </div>
          {/* right-right */}
          <div className="flex space-x-3">
            <WagmiConfig config={wagmiConfig}>
              <ConnectBtn />
            </WagmiConfig>

            <Link to="/cart">
              <HiShoppingCart className="text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link to="/account">
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
      <Web3Modal
        projectId="edb6828b8024fe4e9f28bfb372f4c88f"
        ethereumClient={ethereumClient}
      />
    </nav>
  );
};

export default Navbar;
