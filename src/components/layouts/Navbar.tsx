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
import { useEthers } from '@usedapp/core'

type props = {
  connected: boolean
}

const Navbar = (props: props) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const { account } = useEthers()

  const isConnected = account !== undefined

  return (
    <nav
      className="bg-[#444444] px-4 py-6
    text-white lg:px-7"
    >
      <div className="flex items-center justify-between">
        {/* left */}
        <div className="flex items-center space-x-4 xl:space-x-14">
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
            {!isConnected ? (
              <>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-gray-200"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-gray-200"
                >
                  Contact
                </Link>
              </>
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
                <Link
                  to="/rewards"
                  className="cursor-pointer hover:text-gray-200"
                >
                  Rewards
                </Link>
              </>
            )}
          </div>
          {/* center */}
          <div>
            {isConnected && (
              <Link
                to="/rewards"
                className="relative cursor-pointer hover:text-gray-200"
                onMouseEnter={() => setShowDropdown(true)}
              >
                <div
                  className="flex items-center  space-x-1
            rounded-md py-1 pr-1 font-semibold text-orange-400 
            hover:bg-gray-900 xl:text-lg"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <img src={coin} alt="nft" className="w-[35px]" />
                  <p>9476</p>
                </div>

                {showDropdown && (
                  <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="absolute top-10 rounded-md bg-white pt-2
                     text-[0.9rem] text-black shadow-md"
                  >
                    <Link
                      to="/buytom"
                      className="block border-b px-6 py-1 hover:bg-gray-200
                         hover:text-primary"
                    >
                      BuyTom
                    </Link>
                    <Link
                      to="/amountspent"
                      className="block w-max px-6 py-1 hover:bg-gray-200 
                        hover:text-primary"
                    >
                      Amt Spent
                    </Link>
                  </div>
                )}
              </Link>
            )}
          </div>
        </div>
        {/* right */}
        <div className="flex xl:w-[60%]">
          {/* search bar */}
          <div className="mx-6 hidden flex-1 md:inline-block">
            <input
              type="search"
              placeholder="searchNFT"
              className="w-full rounded-sm bg-white/10 p-2 px-4
               text-white outline-none placeholder:text-gray-200"
            />
          </div>
          {/* right-right */}
          <div className="flex space-x-3">
            <ConnectBtn />
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
      {/* 
      <BuyTomForm />
      <RegisterUserForm />
      <ClaimRewards></ClaimRewards> */}
    </nav>
  )
}

export default Navbar
