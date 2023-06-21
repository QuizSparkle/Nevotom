import closeAngleBracketImg from "../assets/imgs/bracket.svg";
import verticalBarImg from "../assets/imgs/verticalBar.svg";
import './Breadcrumbs.scss';
function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-url">
                Home
                <img src={closeAngleBracketImg} alt="close-angle-bracket" />
            </div>
            <div className="breadcrumbs-url">
                Shop
                <img src={closeAngleBracketImg} alt="close-angle-bracket" />
            </div>
            <div className="breadcrumbs-last-url">
                <img src={verticalBarImg} alt="vertical-bar" />
                Tire
            </div>
        </div>
    )
}

export default Breadcrumbs;