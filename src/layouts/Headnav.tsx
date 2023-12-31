import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { HiShoppingCart } from 'react-icons/hi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import coin from '../../assets/Coin-No-BG.png'
import { BuyTomForm } from '../components/functionalities/BuyTomAndDisplayBalance'
import { RegisterUserForm } from '../components/functionalities/RegisterUserForm'
import { ClaimRewards } from '../components/functionalities/ClaimRewards'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import { getContractAddress } from '../components/helpers/ContractAddress'
import NavNotifications from '../components/notification/Navnotfication'
import NavProfile from '../components/profile/Navprofile'
import logo from '../assets/img/logo.png'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../atoms/SidebarState'
import { RegisterAndConnect } from './RegisterAndConnect'

interface HeadnavProps {
  isWalletConnected: boolean
  walletAddress: string
  connectWallet: () => void
  disconnectWallet: () => void
}
const Headnav: React.FC<HeadnavProps> = ({
  isWalletConnected,
  walletAddress,
  connectWallet,
  disconnectWallet,
}) => {
  const truncatedAddress = isWalletConnected
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : ''

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

  const [, setSidebar] = useRecoilState(sidebarState)

  const sidebarHandler = () => {
    setSidebar((prev: any) => !prev)
  }

  return (
    <header
      id="header"
      className="header fixed-top d-flex
     align-items-center"
    >
      <div className="d-flex align-items-center justify-content-between">
        <i
          onClick={sidebarHandler}
          className="bi bi-list toggle-sidebar-btn
        mr-3 hover:text-black
        lg:hidden"
        ></i>
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" className="h-[70px] w-[70px] object-cover" />
          <span className="d-none d-lg-block">Nevotom</span>
        </Link>
      </div>
      {/* End Logo */}

      <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      {/* End Search Bar */}

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>
          {/* End Search Icon */}

          {/* Include NavNotifications and NavProfile components */}
          {/* <NavNotifications /> */}
          {/* <NavProfile /> */}
          <div className="flex">
            {isWalletConnected ? (
              <>
                <li
                  className="sm:text-auto mr-4 h-[40px] w-[160px]
             rounded-xl border border-black bg-[transparent] px-3 py-2 
             text-[0.9rem] text-white transition-all ease-in-out sm:h-auto sm:w-auto"
                >
                  {/* <FontAwesomeIcon icon={faUser} className="profile-icon" /> */}
                  <span>{truncatedAddress}</span>
                </li>
                <li
                  className="sm:text-auto mr-4 h-[40px] w-[160px]
             rounded-sm border border-black bg-[#ce3ae2] px-3 py-2 
             text-[0.9rem] text-white transition-all ease-in-out hover:border-white hover:bg-[#9e34db] sm:h-auto sm:w-auto"
                >
                  <button className="connect-btn" onClick={disconnectWallet}>
                    Disconnect
                  </button>
                </li>
              </>
            ) : (
              <>
                <li
                  className="sm:text-auto mr-4 h-[40px] w-[160px]
             rounded-sm border border-black bg-[#ce3ae2] px-3 py-2 
             text-[0.9rem] text-white transition-all ease-in-out hover:border-white hover:bg-[#9e34db] sm:h-auto sm:w-auto"
                >
                  <button className="connect-btn" onClick={connectWallet}>
                    <i className="fa fa-plug"></i> Connect Wallet
                  </button>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
    /* End Header */
  )
}

export default Headnav
