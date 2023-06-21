import './Pick.scss';
import tireImg from '../../assets/imgs/tire.png';

const Pick = () => {
    return (
        <div className="pick">
            <div className="pick-container">
                <div className="pick-row">
                    <div className="pick-title">
                        Top Picks For You
                        <div className="pick-title-description">Find a bright ideal to suit your taste with our great selection of products.</div>
                    </div>
                </div>
                <div className="pick-row">
                    <div className='pick-content'>
                        {/* Pick Item */}
                        <div className="pick-item">
                            <img src={tireImg} alt="pick-img"></img>
                            <div className="pick-item-description">
                                Brake system<br/>
                                Part Number: 8-97100-344-2<br/>
                                Shope: Al Fareed<br/>
                            </div>
                            <div className="pick-item-price">
                                Rs. 25,000.00
                            </div>
                        </div>
                        {/* Pick Item */}
                        <div className="pick-item">
                            <img src={tireImg} alt="pick-img"></img>
                            <div className="pick-item-description">
                                Brake system<br/>
                                Part Number: 8-97100-344-2<br/>
                                Shope: Al Fareed<br/>
                            </div>
                            <div className="pick-item-price">
                                Rs. 25,000.00
                            </div>
                        </div>
                        {/* Pick Item */}
                        <div className="pick-item">
                            <img src={tireImg} alt="pick-img"></img>
                            <div className="pick-item-description">
                                Brake system<br/>
                                Part Number: 8-97100-344-2<br/>
                                Shope: Al Fareed<br/>
                            </div>
                            <div className="pick-item-price">
                                Rs. 25,000.00
                            </div>
                        </div>
                        {/* Pick Item */}
                        <div className="pick-item">
                            <img src={tireImg} alt="pick-img"></img>
                            <div className="pick-item-description">
                                Brake system<br/>
                                Part Number: 8-97100-344-2<br/>
                                Shope: Al Fareed<br/>
                            </div>
                            <div className="pick-item-price">
                                Rs. 25,000.00
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pick-row">
                    <div className="pick-more">View More</div>
                </div>

            </div>
        </div>

    );
};

export default Pick;
