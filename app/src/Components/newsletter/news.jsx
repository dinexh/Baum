import React, { useState } from "react";
import Mail from "../../Assets/Mail.avif";
import VisibleOnScroll from '../Loaders/VisibleOnScroll'; 
import './news.css';

const News = () => {
    const [showToaster, setShowToaster] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Simulate server not available scenario
        setShowToaster(true);

        // Hide the toaster after 3 seconds
        setTimeout(() => {
            setShowToaster(false);
        }, 3000);
    };

    return (  
        <VisibleOnScroll className="news-container">
            <div className="news-container-in">
                <div className="news-container-in-one">
                    <img src={Mail} className="mailImage" alt="Newsletter Icon"/>
                </div>
                <div className="news-container-in-two">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>
                        Stay informed about our latest updates, tree-planting events, and more. Enter your email below to join our 
                        newsletter and support the Save Trees campaign.
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            className="newsletter-input" 
                            placeholder="Enter your email" 
                            required 
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>

                    {showToaster && (
                        <div className="toaster">
                            Server not available. Please try again later.
                        </div>
                    )}
                </div>
            </div> 
        </VisibleOnScroll>
    );
}

export default News;
