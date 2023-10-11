import React, {useState} from 'react'
import Recentsales from '../allProducts/Recentsales'
import Topselling from '../allProducts/Topselling'
import Sidebar from '../../layouts/Sidebar'
import { useEthers, useTokenBalance } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'
import { getContractAddress } from '../../components/helpers/ContractAddress'
import Tom from "../../assets/Coin-No-BG.png"
import Tron from "../../assets/tron.png"


const Wallet = () => {
  

  return (
    <>
      <div className="pagetitle">
        <h1>Post</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/wallet">Wallets</a>
            </li>
            <li className="breadcrumb-item active">mywallet</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}

      <div className="col-lg-8">
        <div className="row">
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">TOM</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id='balance' src={Tom} alt='' />
                  </div>
                  <div className="ps-3">
                  <h6>0</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">Tron</h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    {/* <i className="bi bi-currency-dollar"></i> */}
                    <img id='balance' src={Tron} alt='' />
                  </div>
                  <div className="ps-3">
                  <h6>0</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Recentsales />

          <Topselling />
        </div>
      </div>
      <Sidebar />
    </>
  )
}

export default Wallet
