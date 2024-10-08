import React, { useState } from 'react';
import VisibleOnScroll from '../Loaders/VisibleOnScroll'; 
import './mission.css';

const Mission = () => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const content = [
        "🌳 Planting a Greener Future: Join us in our mission to create a safer and healthier planet by planting trees across the globe. Every tree counts, and together, we can make a significant impact.",
        "🌿 At Panchatantra, we strive to empower individuals in environmental stewardship through afforestation and water conservation, boosting green cover, restoring groundwater, and preserving biodiversity for future generations.",
        "🌍 Our mission is to create a sustainable future for all by planting trees, conserving water, and promoting environmental awareness. Together, we can make a difference and protect our planet for future generations.",
    ];

    const handlePrevClick = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <VisibleOnScroll className="mission-container">
            <div className="mission-container-in">
                <div className="mission-container-heading">
                    <h1>Our</h1>
                    <h1><span>Mission</span></h1>
                </div>
                <div className="mission-matter">
                    <p>{content[currentContentIndex]}</p>
                </div>
                <div className="mission-buttons">
                    <button className="side-button" onClick={handlePrevClick}>&larr;</button>
                    <button className="side-button" onClick={handleNextClick}>&rarr;</button>
                </div>
            </div>
        </VisibleOnScroll>
    );
};

export default Mission;
