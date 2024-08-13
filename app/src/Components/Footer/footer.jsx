import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Tree from "../../Assets/tree.png";
import Tree from '../../Assets/Tree.png';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-in">
                <div className="footer-in-one">
                    <img src={Tree} className='FooterTree' alt="Tree Footer" />
                    <h1>KLSAC-Panchatantra</h1>
                </div>
                <div className="footer-in-two">
                    <h3>Quick Links</h3>
                    <a href="#">Mission</a>
                    <a href="#">Events</a>
                    <a href="#">Latests</a>
                    <a href="#">Get involved</a>
                </div>
                <div className="footer-in-three">
                    <h3>Contact Us</h3>
                    <p>KL SAC - Panchatantra</p>
                    <p>Green Fields, Vaddeswaram, Andhra Pradesh 522302</p>
                    <p>086453 50200</p>
                </div>
                <div className="footer-in-four">
                    <h3>Follow Us</h3>
                    <div className="four-icon">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <p>Facebook</p>
                    </div>
                    <div className="four-icon">
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <p>Instagram</p>
                    </div>
                    <div className="four-icon">
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <p>Linkedin</p>
                    </div>
                    <div className="four-icon">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
            <div className="footer-in-lower">
                <div className="footer-in-lower-one">
                    <p>© 2024 KLSAC-Panchatantra. All Rights Reserved. | Designed and Developer by Dinesh Korukonda of ZeroOne Code Club</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
