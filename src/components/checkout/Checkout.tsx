import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPencilAlt, faDollarSign, faNewspaper, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Topselling from '../allProducts/Topselling'
import Sidebar from '../../layouts/Sidebar'

const Checkout: React.FC = () => {
  return (
    <>
      
        <div className="pagetitle">
          <h1>Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Checkout</a>
              </li>
              <li className="breadcrumb-item active">produscts</li>
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
                    Checkout <span>/Product</span>
                  </h5>

                  {/* Line Chart */}
                  <div id="reportsChart">Checkout form</div>

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

export default Checkout
