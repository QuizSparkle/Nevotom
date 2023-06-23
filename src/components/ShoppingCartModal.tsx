import closeIcon from "../assets/imgs/cart-modal-close.svg"
import itemRmIcon from "../assets/imgs/item-rm.svg"
import thumbImg from "../assets/imgs/tire.png"
import "./ShoppingCartModal.scss"

export interface Props {
    handleClose: string;
    isShow: boolean;
    // goodsID: string;
    goodsCount: number;
}

const ShoppingCartModal = ({ handleClose, isShow, goodsCount }: Props) => {
    return (
        <div className="cart-modal">
        <div className="cart-modal-container">
            <div className="modal-header">
                <div className="header-title">Shopping Cart</div>
                <div className="header-close">
                    <img src={closeIcon} alt="close-icon"></img>
                </div>
            </div>
            <div className="modal-content">
                {/* Item */}
                <div className="item">
                    <div className="thumb">
                        <img src={thumbImg} alt="thumb"/> 
                    </div>
                    <div className="detail">
                        <div className="name">MIRAGE MR-AT172 285/65</div>
                        <div className="count-price">
                            <div className="count">1   X</div>
                            <div className="price">    Rs. 250,000.00</div>
                        </div>
                    </div>
                    <div className="remove">
                        <img src={itemRmIcon} alt="rm-icon"></img>
                    </div>
                </div>
                {/* Item */}
                <div className="item">
                    <div className="thumb">
                        <img src={thumbImg} alt="thumb"/> 
                    </div>
                    <div className="detail">
                        <div className="name">MIRAGE MR-AT172 285/65</div>
                        <div className="count-price">
                            <div className="count">1   X</div>
                            <div className="price">    Rs. 250,000.00</div>
                        </div>
                    </div>
                    <div className="remove">
                        <img src={itemRmIcon} alt="rm-icon"></img>
                    </div>
                </div>
                {/* Item */}
                <div className="item">
                    <div className="thumb">
                        <img src={thumbImg} alt="thumb"/> 
                    </div>
                    <div className="detail">
                        <div className="name">MIRAGE MR-AT172 285/65</div>
                        <div className="count-price">
                            <div className="count">1   X</div>
                            <div className="price">    Rs. 250,000.00</div>
                        </div>
                    </div>
                    <div className="remove">
                        <img src={itemRmIcon} alt="rm-icon"></img>
                    </div>
                </div>
                {/* Item */}
                <div className="item">
                    <div className="thumb">
                        <img src={thumbImg} alt="thumb"/> 
                    </div>
                    <div className="detail">
                        <div className="name">MIRAGE MR-AT172 285/65</div>
                        <div className="count-price">
                            <div className="count">1   X</div>
                            <div className="price">    Rs. 250,000.00</div>
                        </div>
                    </div>
                    <div className="remove">
                        <img src={itemRmIcon} alt="rm-icon"></img>
                    </div>
                </div>
                {/* Item */}
                <div className="item">
                    <div className="thumb">
                        <img src={thumbImg} alt="thumb"/> 
                    </div>
                    <div className="detail">
                        <div className="name">MIRAGE MR-AT172 285/65</div>
                        <div className="count-price">
                            <div className="count">1   X</div>
                            <div className="price">    Rs. 250,000.00</div>
                        </div>
                    </div>
                    <div className="remove">
                        <img src={itemRmIcon} alt="rm-icon"></img>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <div className="sub-total">
                Subtotal
                    <div className="total">Rs. 50,000.00</div>
                </div>
                <div className="btn-box">
                    <div className="view-cart">
                        <label htmlFor="">View Cart</label>
                    </div>
                    <div className="view-cart">
                        <label htmlFor="">View Cart</label>
                    </div>
                </div>
            </div>
        </div >
        </div>
    );

};

export default ShoppingCartModal;