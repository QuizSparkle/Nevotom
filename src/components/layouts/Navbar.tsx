import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { HiShoppingCart } from 'react-icons/hi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import logo from '../../assets/logo.png'
import coin from '../../assets/Coin-No-BG.png'

// For Web3Modal
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, fantomTestnet, mainnet, polygon } from 'wagmi/chains'
import ConnectBtn from './ConnectBtn'
import { Web3Modal } from '@web3modal/react'

import { useAccount } from 'wagmi'

console.log('account : ', useAccount.name)

const chains = [arbitrum, mainnet, polygon, fantomTestnet]

const { publicClient } = configureChains(chains, [
  w3mProvider({ projectId: 'edb6828b8024fe4e9f28bfb372f4c88f' }),
])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    projectId: 'edb6828b8024fe4e9f28bfb372f4c88f',
    version: 2,
    chains,
  }),
  publicClient,
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

type props = {
  connected: boolean
}

const Navbar = (props: props) => {
  const [menu, setMenu] = useState(false)

  return (
    <nav className="bg-[#444444] px-4 py-6 text-white lg:px-7">
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex space-x-16">
          <img src={logo} alt="NFtizeMarket" className="w-[210px]" />

          {/* navlinks */}
          <div
            className="ml-4 flex items-center space-x-6 text-lg
          text-white xl:text-xl"
          >
            <Link to="/" className="cursor-pointer hover:text-gray-200">
              Home
            </Link>
            {!props.connected ? (
              <div>
                <ScrollLink
                  to="/about"
                  duration={500}
                  smooth
                  className="cursor-pointer hover:text-gray-200"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="/contact"
                  className="cursor-pointer hover:text-gray-200"
                >
                  Contact
                </ScrollLink>
              </div>
            ) : (
              <>
                <Link
                  to="/allproducts"
                  className="cursor-pointer hover:text-gray-200"
                >
                  Buy
                </Link>
                <Link to="/sell" className="cursor-pointer hover:text-gray-200">
                  Sell
                </Link>
              </>
            )}
          </div>
          {/* center */}
          <div>
            {props.connected && (
              <div
                className=" flex h-14 items-center space-x-1 
            rounded-md bg-gray-200 px-1 font-semibold text-black xl:text-2xl"
              >
                <img
                  src={coin}
                  alt="nft"
                  className="sm:w-[30px] md:w-[50px] xl:w-[80px]"
                />
                <p>9476</p>
              </div>
            )}
          </div>
        </div>
        {/* right */}
        <div className="hidden w-full md:flex xl:w-[60%]">
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
          {menu ? <IoMdClose size={'44'} /> : <HiOutlineMenuAlt3 size={'44'} />}
        </button>
      </div>
      {/* navbar for smaller screens */}
      <Web3Modal
        projectId="edb6828b8024fe4e9f28bfb372f4c88f"
        ethereumClient={ethereumClient}
      />
    </nav>
  )
}

export default Navbar
