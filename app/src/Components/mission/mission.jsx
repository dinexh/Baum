import React, { useRef, useState, useEffect } from 'react';
import './mission.css';

const Mission = () => {
    const [isVisible, setIsVisible] = useState(false);
    const missionRef = useRef(null);
    
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const content = [
        "🌳 Planting a Greener Future: Join us in our mission to create a safer and healthier planet by planting trees across the globe. Every tree counts, and together, we can make a significant impact.",
        "🌿 At Panchatantra, our mission is to empower every individual to become a steward of the environment by promoting afforestation and water conservation. Through active student participation and community engagement, we strive to create urban and rural forestries that not only enhance green cover but also rejuvenate groundwater levels, mitigate climate change, and preserve biodiversity. Our mission is to safeguard our planet for future generations by fostering a culture of environmental stewardship and sustainability.",
        "🌍 Our mission is to create a sustainable future for all by planting trees, conserving water, and promoting environmental awareness. Together, we can make a difference and protect our planet for future generations.",
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (missionRef.current) {
            observer.observe(missionRef.current);
        }

        return () => {
            if (missionRef.current) {
                observer.unobserve(missionRef.current);
            }
        };
    }, []);

    const handlePrevClick = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentContentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={`mission-container ${isVisible ? 'visible' : ''}`} ref={missionRef}>
            <div className="mission-container-in">
                <div className="mission-container-heading">
                   <h1>Our <span> Mission</span> </h1>
                </div>
                <div className="mission-matter">
                    <p>{content[currentContentIndex]}</p>
                </div>
                <div className="mission-buttons">
                    <button className="side-button" onClick={handlePrevClick}>&larr;</button>
                    <button className="side-button" onClick={handleNextClick}>&rarr;</button>
                </div>
            </div>
        </div>
    );
}

export default Mission;
