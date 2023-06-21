import closeAngleBracketImg from "../assets/imgs/bracket.svg";
import './Breadcrumbs.scss';
function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-url">
                Home
                <img src={closeAngleBracketImg} alt="close-angle-bracket"/>
            </div>
            <div className="breadcrumb-last-url">

            </div>
        </div>
    )
}

export default Breadcrumbs;