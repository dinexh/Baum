// src/components/Activity/Activity.jsx
import './activities.css'; 
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity_data } from '../../Data/activity_data'; 

const Activity = () => {
    const containerRef = useRef(null); 
    const navigate = useNavigate();

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
                    <h1>Our <span>Activities</span></h1>
                </div>
                <div className="activity-container-main">
                    {Activity_data.map((item) => (
                        <div key={item.id} className="activity-box" onClick={() => navigate(`/activity/${item.id}`)}>
                            <div className="activity-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="activity-info">
                                <h1>{item.title}</h1>
                                <p>{item.discription}</p> 
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
