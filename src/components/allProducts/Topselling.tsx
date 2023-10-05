import React from 'react';
import topimg from '../../assets/img/product-1.jpg';


const Topselling: React.FC = () => {
  return (
    <div className="col-12">
      <div className="card top-selling overflow-auto">
        <div className="filter">
          <a className="icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Today
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Month
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                This Year
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body pb-0">
          <h5 className="card-title">
            Top Selling <span>| Today</span>
          </h5>

          <table className="custom-table">
            <thead>
              <tr>
                <th scope="col">Preview</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Sold</th>
                <th scope="col">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={topimg} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="fw-bold">
                    Ut inventore
                  </a>
                </td>
                <td>$64</td>
                <td className="fw-bold">124</td>
                <td>$5,828</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={topimg} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="fw-bold">
                    Exercitationem
                  </a>
                </td>
                <td>$46</td>
                <td className="fw-bold">98</td>
                <td>$4,508</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={topimg} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="fw-bold">
                    Doloribus nisi
                  </a>
                </td>
                <td>$59</td>
                <td className="fw-bold">74</td>
                <td>$4,366</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={topimg} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="fw-bold">
                    Officiis quaerat
                  </a>
                </td>
                <td>$32</td>
                <td className="fw-bold">63</td>
                <td>$2,016</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="#">
                    <img src={topimg} alt="" />
                  </a>
                </th>
                <td>
                  <a href="#" className="fw-bold">
                    Sit unde debitis
                  </a>
                </td>
                <td>$79</td>
                <td className="fw-bold">41</td>
                <td>$3,239</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Topselling;
