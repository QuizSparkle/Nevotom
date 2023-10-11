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
import useimage from '../assets/img/news-2.jpg'
import Tom from "../assets/Coin-No-BG.png"
import Tron from "../assets/tron.png"



const Sidebar = () => {
  
  return (
    <div className="col-lg-4">
      {/* Recent Activity */}
      <div className="card info-card revenue-card">
        <div className="card-body">
          <h5 className="card-title">Balance:</h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              {/* <i className="fas fa-dollar-sign"></i>  */}
              <img id='balance' src={Tom} alt='' />

            </div>
            <div className="ps-3">
              <h6>0</h6>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              {/* <i className="fas fa-dollar-sign"></i>  */}
              <img id='balance' src={Tron} alt='' />
            </div>
            <div className="ps-3">
              <h6>0</h6>
            </div>
          </div>
        </div>
      </div>
      {/* End Recent Activity */}

      {/* News & Updates Traffic */}
      <div className="card">
        <div className="card-body pb-0">
          <h5 className="card-title">Buyers &amp; Sellers</h5>
          <div className="news">
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Nihil blandi</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Quidem autem</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Id quia</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Laborum cor</a></h4>
              <button id="followbtn">Follow</button>
            </div>
            <hr />
            <div className="post-item clearfix">
              <img src={useimage} alt="" />
              <h4><a href="#">Et dolores</a></h4>
              <button id="followbtn">Follow</button>
            </div>
          </div>
          {/* End sidebar recent posts */}
        </div>
      </div>
      {/* End News & Updates */}
    </div>
  );
};

export default Sidebar;
