import React from 'react';
import Tree from '../../Assets/tree.png';
import './nav.css';

const Nav = ({ show }) => {
    return (
        <header>
            <nav className={`nav ${show ? 'visible' : ''}`}>
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
                        <p>Activities</p>
                        <p>Achievements</p>
                        <p>Latest</p>
                    </div>
                    <div className="nav-in-three">
                        <button>
                            Donate
                        </button>
                        <button>
                            Join Us
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
