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
import { RegisterAndConnect } from '../components/Old-folders/layouts/ConnectBtn'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import { getContractAddress } from '../components/helpers/ContractAddress'
import NavNotifications from '../components/notification/Navnotfication';
import NavProfile from '../components/profile/Navprofile';
import logo from '../assets/img/logo.png'

type props = {
  connected: boolean
}


const Headnav = (props: props) => {
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
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={logo} alt="" />
          <span className="d-none d-lg-block">Nevotom</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
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
          <NavProfile />
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
    /* End Header */
  );
};

export default Headnav;
