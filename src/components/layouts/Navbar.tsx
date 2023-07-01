import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { HiShoppingCart } from 'react-icons/hi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import logo from '../../assets/logo.png'
import coin from '../../assets/Coin-No-BG.png'
import { BuyTomForm } from '../functionalities/BuyTomAndDisplayBalance'
import { RegisterUserForm } from '../functionalities/RegisterUserForm'
import { ClaimRewards } from '../functionalities/ClaimRewards'
import { ConnectBtn } from './ConnectBtn'

type props = {
  connected: boolean
}

const Navbar = (props: props) => {
  // const [menu, setMenu] = useState(false)

  return (
    <nav
      className="bg-[#444444] px-4 py-6
    text-white lg:px-7"
    >
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex items-center space-x-4 lg:space-x-16">
          {/* logo */}
          <img
            src={logo}
            alt="NFtizeMarket"
            className="w-[90px] lg:w-[200px]"
          />

          {/* navlinks */}
          <div
            className="flex items-center space-x-6 text-[1.1rem] text-white
          lg:ml-4 lg:text-xl"
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
              <Link to="/rewards">
                <div
                  className="flex items-center  space-x-1
            rounded-md pr-1 font-semibold text-orange-400 
            hover:bg-gray-900 xl:text-lg"
                >
                  <img src={coin} alt="nft" className="w-[35px]" />
                  <p>9476</p>
                </div>
              </Link>
            )}
          </div>
        </div>
        {/* right */}
        <div className="flex xl:w-[60%]">
          {/* search bar */}
          <div className="mx-6 hidden flex-1 lg:inline-block">
            <input
              type="search"
              placeholder="searchNFT"
              className="w-full rounded-sm bg-white/10 p-2 px-4
               text-white outline-none placeholder:text-gray-200"
            />
          </div>
          {/* right-right */}
          <div className="flex space-x-3">
            {/* <WagmiConfig config={wagmiConfig}> */}
              <ConnectBtn />
            {/* </WagmiConfig> */}
            <Link to="/cart">
              <HiShoppingCart className="text-3xl text-white hover:text-gray-200" />
            </Link>
            <Link to="/account">
              <RiAccountCircleFill className="text-3xl text-white hover:text-gray-200" />
            </Link>
          </div>
        </div>
        {/* <button
          className="block p-2 transition-all ease-linear md:hidden"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoMdClose size={'44'} /> : <HiOutlineMenuAlt3 size={'44'} />}
        </button> */}
      </div>

      <BuyTomForm />
      <RegisterUserForm />
      <ClaimRewards></ClaimRewards>
    </nav>
  )
}

export default Navbar
