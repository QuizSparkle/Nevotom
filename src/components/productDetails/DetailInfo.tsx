import React, { FC } from "react";
import bigThumbImg from "../../assets/imgs/big-thumb.png";
import miniThumbImg from "../../assets/imgs/mini-thumb.png";
import linkedInIcon from "../../assets/imgs/linked-in.svg";
import twitterIcon from "../../assets/imgs/twitter.svg";
import faceBookIcon from "../../assets/imgs/face-book.svg";
import "./DetailInfo.scss";
import ShoppingCartModal from "./ProductDetails";

// type DetailProps = {};

type DetailState = {
  showCartModal: boolean;
};

function DetailInfo() {
  // state: DetailState = {
  //   showCartModal: false,
  // };

  // showModal = () => {
  //   this.setState((state) => ({ showCartModal: true }));
  // };

  // hideModal = () => {
  //   this.setState((state) => ({ showCartModal: false }));
  // };
  return (
    <div className="detail-info">
      <div className="detail-content-box">
        <div className="detail-img-box">
          {/* Mini Thumbs */}
          <div className="detail-mini-thumb">
            <div className="detail-img-thumb">
              <img src={miniThumbImg} alt="mini-thumb" />
            </div>
            <div className="detail-img-thumb">
              <img src={miniThumbImg} alt="mini-thumb" />
            </div>
            <div className="detail-img-thumb">
              <img src={miniThumbImg} alt="mini-thumb" />
            </div>
          </div>
          {/* Big Thumb */}
          <div className="detail-big-thumb">
            <img src={bigThumbImg} alt="big-thumb" />
          </div>
        </div>

        <div className="dettail-info-box">
          <div className="detail-info-content">
            <div className="detail-info-title">MIRAGE MR-AT172 285/65</div>
            <div className="detail-info-price">Rs. 50,000.00</div>

            <div className="detail-info-shop">Shope: Tire House</div>

            <div className="detail-info-description">
              The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an
              advanced tread pattern and compound which offer a long tread
              life.It employs a variable pitch tread design. This variable pitch
              design significantly reduces noise and provides a quiet ride. Its
              optimized profile provides even wear and classic style.
            </div>
            <label>Size</label>
            {/* Siezes */}
            <div className="detail-info-size-box">
              <div className="detail-info-size">
                <label>17</label>
              </div>
              <div className="detail-info-size">
                <label>17</label>
              </div>
              <div className="detail-info-size">
                <label>17</label>
              </div>
            </div>
            <label>Color</label>
            <div className="detail-info-color "></div>
            <div className="count-container">
              <div className="count-box">
                <div className="count-minus">-</div>
                <div className="detail-info-count ">1</div>
                <div className="count-plus">+</div>
              </div>
              <button type="button">Add To Card</button>
              {/* <ShoppingCartModal
                    handleClose={this.hideModal}
                  isShow={this.state.showCartModal}
                /> */}
            </div>
          </div>
          <div className="detail-info-footer">
            <div className="footer-column">
              <div className="detail-info-footer-cell">SKU</div>
              <div className="detail-info-footer-cell">Category</div>
              <div className="detail-info-footer-cell">Tags</div>
              <div className="detail-info-footer-cell">Share</div>
            </div>
            <div className="footer-column">
              <div className="detail-info-footer-cell">: SS001</div>
              <div className="detail-info-footer-cell">: Tire</div>
              <div className="detail-info-footer-cell">: Tire, rims, Shop</div>
              <div className="detail-info-footer-cell">
                :<img src={faceBookIcon} alt="face-book-icon"></img>
                <img src={linkedInIcon} alt="face-book-icon"></img>
                <img src={twitterIcon} alt="face-book-icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-description-box">
        <div className="title-box">
          <div className="title">Description</div>
          <div className="title">Additional Inforamtion</div>
          <div className="title">Review [5]</div>
        </div>
        <div className="detail-description">
          <div className="description">
            The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light
            truck tyre. It has been engineered to deliver high mileage. Mirage
            MR AT-172 Performs best in on road and off road driving conditions.
            The Mirage AT MR-172 265/65 R17 has an aggressive tread design. Its
            aggressive tread delivers excellent wet and dry traction. It also
            offers even tread wear hence longer tread life is achieved.stable
            tread block design provides better traction and improves cornering
            and braking in all weather conditions. Mirage AT MR-172 265/65 R17
            Lateral sipes also help in improving mud snow and wet qualities.
          </div>
        </div>
        <div className="thumb-box">
          <div className="thumb">
            <img src={bigThumbImg} alt="" />
          </div>
          <div className="thumb">
            <img src={bigThumbImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailInfo;
