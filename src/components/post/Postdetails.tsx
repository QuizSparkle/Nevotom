import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilAlt, faDollarSign, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../layouts/Sidebar'

const Postdetails: React.FC = () => {
  return (
    <>
      
        <div className="pagetitle">
          <h1>Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Post</a>
              </li>
              <li className="breadcrumb-item active">Details</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <div className="col-lg-8">
          <div className="row">
            
            {/* Reports */}
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Posts <span>Details</span>
                  </h5>

                  {/* Line Chart */}
                  <div id="reportsChart">Post Details</div>

                  {/* End Line Chart */}
                </div>
              </div>
            </div>
            {/* End Reports */}
          </div>
        </div>
        <Sidebar />
      
      
    </>
  )
}

export default Postdetails
