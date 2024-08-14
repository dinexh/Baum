import React from 'react';
import Tree from '../../Assets/Tree.png';
// import TreeImage from "../../Assets/Tree.png"
import './nav.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Nav = ({ show }) => {
    return (
        <header>
            <nav className={`nav ${show ? 'visible' : ''}`}>
                <div className="nav-in">
                    <div className="nav-in-one">
                        <div className="nav-in-one-in">
                            <img className="TreeImage"  alt="" />
                            <ScrollLink to='hero' smooth={true} duration={600}>
                                <h1>Panchatantra</h1>
                            </ScrollLink>
                        </div>
                    </div>
                    <div className="nav-in-two">
                        <ScrollLink to="mission" smooth={true} duration={600}>
                            <p>Our Mission</p>
                        </ScrollLink>
                        <ScrollLink to="objectives" smooth={true} duration={600}>
                            <p>What we do?</p>
                        </ScrollLink>
                        <ScrollLink to="activities" smooth={true} duration={600}>
                            <p>Activities</p>
                        </ScrollLink>
                        <RouterLink id='navlink' to="/Auth">
                            <p>Get started</p>
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
