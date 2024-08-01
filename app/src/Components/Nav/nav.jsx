import React from 'react';
import Tree from '../../Assets/tree.png';
import './nav.css';
import { Link } from 'react-scroll';

const Nav = ({ show }) => {
    // const handleMission = () => {
    //     window.location.href = '/#mission';
    // }
    // const handleObjective = () => {
    //     window.location.href = '/#objectives';
    // }
    // const handleAuth = () => {
    //     window.location.href = '/Auth';
    // }
    return (
        <header>
            <nav className={`nav ${show ? 'visible' : ''}`}>
                <div className="nav-in">
                    <div className="nav-in-one">
                        <div className="nav-in-one-in">
                            <img className="TreeImage" src={Tree} alt="" />
                            <Link to='hero' smooth={true} duration={600} >
                            <h1>Panchatantra</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="nav-in-two">
                    <Link to="mission" smooth={true} duration={600}>
                            <p>Our Mission</p>
                        </Link>
                        <Link to="objectives" smooth={true} duration={600}>
                            <p>What we do?</p>
                        </Link>
                        <Link to="activities" smooth={true} duration={600}>
                            <p>Activities</p>
                        </Link>
                        <Link to="latest" smooth={true} duration={600}>
                            <p>Latest</p>
                        </Link>
                    </div>
                    {/* <div className="nav-in-three">
                        <button>
                            Donate
                        </button>
                        <button>
                            Join Us
                        </button>
                    </div> */}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
