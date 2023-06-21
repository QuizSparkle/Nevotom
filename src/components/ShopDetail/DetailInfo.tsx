import bigThumbImg from "../../assets/imgs/big-thumb.png"
import miniThumbImg from "../../assets/imgs/mini-thumb.png"
import linkedInIcon from "../../assets/imgs/linked-in.svg"
import twitterIcon from "../../assets/imgs/twitter.svg"
import faceBookIcon from "../../assets/imgs/face-book.svg"
import "./DetailInfo.scss"
const DetailInfo = () => {
    return (
        <div className="detail-info">
            <div className="detail-content-box">
                <div className="detail-img-box">

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

                    <div className="detail-big-thumb">
                        <img src={bigThumbImg} alt="big-thumb" />

                    </div>
                </div>

                <div className="dettail-info-box">

                    <div className="detail-info-content">

                        <div className="detail-info-title">
                            MIRAGE MR-AT172 285/65

                        </div>

                        <div className="detail-info-price">
                            Rs. 50,000.00
                        </div>

                        <div className="detail-info-shop">
                            Shope: Tire House
                        </div>

                        <div className="detail-info-description">
                            The MIRAGE MR-AT172 285/65 R17 is a tyre developed with an advanced tread pattern and compound which offer a long tread life.It employs a variable pitch tread design. This variable pitch design significantly reduces noise and provides a quiet ride. Its optimized profile provides even wear and classic style.

                        </div>

                        <div className="detail-info-size-box">
                            <div className="detail-info-size">
                                <label>17</label>
                            </div>
                        </div>

                        <div className="detail-info-color ">

                        </div>

                        <div className="detail-info-count-box">


                            <div className="detail-info-count ">
                            </div>

                            <div className="detail-info-add-card">


                            </div>
                        </div>
                    </div>

                    <div className="detail-info-footer">

                        <div className="detail-info-footer-row">

                            <div className="detail-info-footer-cell">

                                <div className="mg "></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="detail-description-box">

                <div className="detail-description-title">
                    font-family: Poppins;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 36px;
                    letter-spacing: 0em;
                    text-align: left;
                </div>

                <div className="detail-description">
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0em;
                    text-align: justified;

                    <div className="detail-description-thumb-box">
                        margin-left: 100px;
                        margin-right: 100px;

                        <div className="detail-description-thumb">
                            width: 50%;
                            background: #9F9F9F;
                            border-radius: 10px;

                            <div className="mg "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailInfo;