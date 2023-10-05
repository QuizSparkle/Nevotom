import React, { useEffect } from 'react'
import NavNotifications from '../components/notification/Navnotfication'
import NavProfile from '../components/profile/Navprofile'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../atoms/SidebarState'
import { RegisterAndConnect } from './RegisterAndConnect'

const Headnav: React.FC = () => {
  const [, setSidebar] = useRecoilState(sidebarState)

  const sidebarHandler = () => {
    setSidebar((prev) => !prev)
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
        hover:text-black mr-3
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
          <NavNotifications />
          <NavProfile />
          <div className="flex">
            <RegisterAndConnect />
          </div>
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
    /* End Header */
  )
}

export default Headnav
