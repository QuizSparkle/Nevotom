import React from 'react';
import NavNotifications from '../components/notification/Navnotfication';
import NavProfile from '../components/profile/Navprofile';
import logo from '../assets/img/logo.png'

const Headnav: React.FC = () => {
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
          <NavNotifications />
          <NavProfile />
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
    /* End Header */
  );
};

export default Headnav;
