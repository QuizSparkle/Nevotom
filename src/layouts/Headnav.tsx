import React, { useEffect } from 'react'
import NavNotifications from '../components/notification/Navnotfication'
import NavProfile from '../components/profile/Navprofile'
import logo from '../assets/img/logo.png'
import { useNotify } from '../components/helpers/ContextState'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { sidebarState } from '../atoms/SidebarState'

const Headnav: React.FC = () => {
  const { notify } = useNotify()
  const [, setSidebar] = useRecoilState(sidebarState);

  useEffect(() => {
    // setTimeout(())
  }, [notify])

  const sidebarHandler = () => {
    setSidebar((prev)=> !prev);
  }

  return (
    <header
      id="header"
      className="header fixed-top d-flex
     align-items-center"
    >
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="" />
          <span className="d-none d-lg-block">Nevotom</span>
        </Link>
        <i
          onClick={sidebarHandler}
          className="bi bi-list lg:hidden
        toggle-sidebar-btn
        hover:text-black"
        ></i>
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
        </ul>
      </nav>
      {/* End Icons Navigation */}
      {notify && (
        <div
          className={`absolute ${notify ? 'right-1' : 'right-28'} top-20 flex
          items-center space-x-1 rounded-sm  bg-green-400 px-1 
          text-[0.9rem] font-semibold text-black transition-all ease-linear`}
        >
          <span className="text-inherit">Product Added to the cart !</span>
          {/* <CloseSharp className="cursor-pointer hover:text-red-600" /> */}
        </div>
      )}
    </header>
    /* End Header */
  )
}

export default Headnav
