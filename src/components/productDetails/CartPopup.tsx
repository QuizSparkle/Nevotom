import React, { FunctionComponent } from "react";
import closeIcon from "../../assets/logos/cart-modal-close.svg";
import itemRmIcon from "../../assets/logos/item-rm.svg";
import thumbImg from "../../assets/logos/tire.png";

export interface Props {
  handleClose: () => void;
  isShow: boolean;
}

const ShoppingCartModal: FunctionComponent<Props> = ({
  handleClose,
  isShow,
}) => {
  const showHideClassName = isShow ? "cart-modal block" : "cart-modal hidden";
  console.log(showHideClassName);
  return (
    <div className={showHideClassName}>
      <div className="cart-modal-container mx-auto w-96 border border-gray-300 bg-white">
        <div className="modal-header flex justify-between border-b border-gray-300 px-4 py-3">
          <div className="header-title text-lg font-semibold text-black">
            Shopping Cart
          </div>
          <div className="header-close">
            <button type="button" onClick={handleClose}>
              <img src={closeIcon} alt="close-icon" />
            </button>
          </div>
        </div>
        <div className="modal-content flex flex-col gap-4 overflow-y-auto p-4">
          {/* Item */}
          <div className="item flex gap-4">
            <div className="thumb h-20 w-24 rounded bg-gray-300"></div>
            <div className="detail flex flex-col justify-center gap-1">
              <div className="name text-base font-medium text-black">
                MIRAGE MR-AT172 285/65
              </div>
              <div className="count-price flex">
                <div className="count text-base font-light text-black">1 X</div>
                <div className="price text-gold font-semibold">
                  Rs. 250,000.00
                </div>
              </div>
            </div>
            <div className="remove flex items-center justify-center">
              <img src={itemRmIcon} alt="rm-icon" />
            </div>
          </div>
          {/* More items */}
        </div>
        <div className="modal-footer flex justify-between border-t border-gray-300 py-4">
          <div className="sub-total flex gap-8">
            <div className="label text-base font-medium text-black">
              Subtotal
            </div>
            <div className="total text-gold text-base font-semibold">
              Rs. 50,000.00
            </div>
          </div>
          <div className="btn-box flex gap-8">
            <div className="view-cart flex h-8 w-32 items-center justify-center rounded-full border border-black">
              <label htmlFor="" className="text-sm font-medium text-black">
                View Cart
              </label>
            </div>
            <div className="view-cart flex h-8 w-32 items-center justify-center rounded-full border border-black">
              <label htmlFor="" className="text-sm font-medium text-black">
                View Cart
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
