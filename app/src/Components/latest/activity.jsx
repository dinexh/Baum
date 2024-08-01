import './activities.css'; 
import React, { useRef, useEffect } from 'react';
import { Activity_data } from './activity_data'; 

const Activity = () => {
    const containerRef = useRef(null); 

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (containerTop < windowHeight) {
                    containerRef.current.classList.add('visible');
                } else {
                    containerRef.current.classList.remove('visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger scroll handler initially

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="activity-container" ref={containerRef}>
            <div className="activity-container-in">
                <div className="activity-container-heading">
                    <h1>Activities</h1>
                </div>
                <div className="activity-container-main">
                    {Activity_data.map((item) => (
                        <div key={item.id} className="activity-box">
                            <div className="activity-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="activity-info">
                                <h1>{item.title}</h1>
                                <p>{item.discription}</p> {/* Make sure this matches the field name in your data */}
                            </div>
                            <div className="activity-learn">
                                <p>Learn More</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Activity;
