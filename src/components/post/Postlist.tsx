import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilAlt, faDollarSign, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Topselling from '../allProducts/Topselling'
import Sidebar from '../../layouts/Sidebar'

const Postlist: React.FC = () => {
  return (
    <>
      
        <div className="pagetitle">
          <h1>Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <div className="col-lg-8">
          <div className="row">
            {/* Customers Card */}
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">Write a post</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-pencil"></i> {/* Changed the icon */}
                    </div>
                    <div className="ps-3">
                      <span>
                        <input type="text" id="posttesat" />
                        <button id="followbtn">Post</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Customers Card */}

            {/* Reports */}
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    POSTs <span>/Today</span>
                  </h5>

                  {/* Line Chart */}
                  <div id="reportsChart">Post list card</div>

                  {/* End Line Chart */}
                </div>
              </div>
            </div>
            {/* End Reports */}

            <Topselling />
          </div>
        </div>
        <Sidebar />
      
      
    </>
  )
}

export default Postlist
