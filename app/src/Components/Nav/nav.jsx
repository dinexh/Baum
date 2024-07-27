import Tree from "../../Assets/tree.png";
import "./nav.css";
const Nav = () => {
    return (  
        <nav>
            <div className="nav-in">
                <div className="nav-in-one">
                    <div className="nav-in-one-in">
                        <img className="TreeImage" src={Tree} alt="" />
                        <h1>Panchatantra</h1>
                    </div>
                </div>
                <div className="nav-in-two">
                    <p>Mission</p>
                    <p>Objectives</p>
                    <p>Activties</p>
                    <p>Achievments</p>
                    <p>Latest</p>
                </div>
                <div className="nav-in-three">
                    <button>
                        Denote
                    </button>
                    <button>
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
 
export default Nav;