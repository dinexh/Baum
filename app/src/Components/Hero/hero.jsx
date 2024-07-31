import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import HeroImage from "../../Assets/heroimage.jpeg";

const Hero = () => {
    const handleGetStarted = () => {
        window.location.href = '/Auth';
    }

    return ( 
        <div className="home">
            <div className="home-in">
                <img src="https://cdn.prod.website-files.com/5f778340ed26b167bd087abe/634ac8b936d9ff52a6d3b395_leaves2%20mono.png" alt="" />
                <div className="home-in-text">
                    <h1>Empower the World</h1>
                    <h2>By Saving trees</h2>
                </div>
                <div className="home-in-button">
                    <div className="home-in-button-in">
                        <p onClick={handleGetStarted}> Get Started</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
