import heroImg from "../../assets/imgs/hero.png";
import './Basket.scss';

const Basket = () => {
    return (
        <div className="basket">
            <div className="bascket-column-container">
                <div className="label-large">NFTizemarket</div>
                <div className="label-medium">The Safest place to buy</div>
                <div className="label-shop">
                    <button className="shop-button">Shop Now</button>
                </div>
            </div>
            <div className="bascket-column-container">
                <div className="basket-img">
                    <img src={heroImg} alt="backet-img" />
                </div>
            </div>
        </div>
    );
};

export default Basket;
