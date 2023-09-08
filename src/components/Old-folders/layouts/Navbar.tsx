import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { HiShoppingCart } from 'react-icons/hi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import logo from '../../assets/nftize-logo.png'
import coin from '../../assets/Coin-No-BG.png'
import { BuyTomForm } from '../../functionalities/BuyTomAndDisplayBalance'
import { RegisterUserForm } from '../../functionalities/RegisterUserForm'
import { ClaimRewards } from '../../functionalities/ClaimRewards'
import { RegisterAndConnect } from './ConnectBtn'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import { getContractAddress } from '../../helpers/ContractAddress'

type props = {
  connected: boolean
}

const Navbar = (props: props) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const { account, chainId } = useEthers()

  const isConnected = account !== undefined

  // const [regModal, setRegModal] = useState(false)
  // const openRegModal = () => {
  //   !userRegistered && setRegModal(true)
  // }
  // const closeRegModal = () => {
  //   setUserRegistered(true)
  //   setRegModal(false)
  // }

  // const [userRegistered, setUserRegistered] = useState(false)

  const chain_Id = chainId ? chainId : 0

  const tomAddress = getContractAddress(chain_Id.toString(), 'toam_address')
  const tokenBalance = useTokenBalance(tomAddress, account)
  const formattedTokenBalance: number = tokenBalance
    ? parseFloat(formatUnits(tokenBalance, 18))
    : 0

  return (
    <nav
      className="h-full border-b border-white/30 bg-black/60 pl-1
      pr-4 pt-3 text-white md:pb-4 lg:px-7 max-w-[300px]"
    >
      <div className="h-full flex flex-col items-start justify-start">
        {/* left */}
        <div className="h-full flex flex-col justify-between">
          <div>
            {/* logo */}
          <div
            className="flex flex-col items-center
           justify-center space-x-1 xl:flex-row pb-3"
          >
            <img
              src={logo}
              alt="NFtizeMarket"
              className="w-[90px] lg:h-[100px] lg:w-[100px]"
            />
            <h4 className="text-[1.4rem] font-semibold text-gray-100 xl:text-2xl">
              NEVOTOM
            </h4>
          </div>

          {/* navlinks */}
          <div
            className="w-[90%] pl-5 pt-6 border-t border-white/10 mb-5 flex flex-col justify-start items-start space-y-1 text-[1.4rem]
            text-gray-200 lg:text-xl"
          >
            <Link to="/" className="w-full text-highlight text-left cursor-pointer  hover:text-highlight">
              Home
            </Link>
            {!isConnected ? (
              <>
                <Link
                  to="/about"
                  className="cursor-pointer hover:text-highlight"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-highlight"
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/allproducts"
                  className="cursor-pointer hover:text-highlight"
                >
                  Buy
                </Link>
                <Link
                  to="/sell"
                  className="cursor-pointer hover:text-highlight"
                >
                  Sell
                </Link>
                <Link
                  to="/rewards"
                  className="cursor-pointer hover:text-highlight"
                >
                  Rewards
                </Link>
              </>
            )}
          </div>
          {/* cart and account */}
          <div className="w-[90%] pl-5 py-5 border-t border-white/10 flex flex-col space-y-3">
            <Link to="/cart" className="text-gray-20 hover:text-highlight flex items-center text-xl">
              <HiShoppingCart className="text-xl " />
              <span>Cart</span>{' '}
            </Link>
            <Link to="/account" className="text-gray-200 hover:text-highlight flex items-center text-xl">
              <RiAccountCircleFill className="text-xl" />
              <span>Account</span>{' '}
            </Link>
          </div>

          {/* rewards and tokens */}
          <div className='w-[90%] pl-5 flex flex-col items-start pt-5 border-t
           border-white/30 text-gray-200'>
            <h4 className='text-xl'>Tom</h4>
            {isConnected && (
              <Link
                to="/rewards"
                className="relative cursor-pointer hover:text-highlight"
                onMouseEnter={() => setShowDropdown(true)}
              >
                <div
                  className="flex space-x-1
            rounded-md py-1 pr-1 font-semibold text-orange-400 
            hover:bg-gray-900 xl:text-lg"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <img src={coin} alt="nft" className="w-[35px]" />
                  <p className="text-xl">
                    {' '}
                    {formattedTokenBalance
                      ? formattedTokenBalance.toString()
                      : '0'}
                  </p>
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
                      className="hover:text-primary block border-b px-6 py-1
                         hover:bg-gray-200"
                    >
                      BuyTom
                    </Link>
                    <Link
                      to="/amountspent"
                      className="hover:text-primary block w-max px-6 py-1 
                        hover:bg-gray-200"
                    >
                      Amt Spent
                    </Link>
                  </div>
                )}
              </Link>
            )}
          </div>
          </div>
          {/* bottom */}
          <div className="flex">
            <RegisterAndConnect />
          </div>
          {/* bottom */}
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
      <ClaimRewards></ClaimRewards> */}
      {/* registration modal */}
      {/* <section
        className={`${
          regModal ? 'absolute' : 'hidden'
        } top-0 flex h-[100vh] w-[100vw] 
      items-center justify-center bg-black/30`}
      >
        <main
          className="flex w-[400px] flex-col items-center gap-4 
      rounded-md bg-slate-50 p-10"
        >
          <h1
            className="border-b border-gray-300  pb-5 text-lg
           font-bold text-red-500"
          >
            Click on register button to register yourself on NFTizeMarket!
          </h1>
          <div>
            <div className="" onClick={closeRegModal}>
              <RegisterUserForm />
            </div>
          </div>
        </main>
      </section> */}
    </nav>
  )
}

export default Navbar
