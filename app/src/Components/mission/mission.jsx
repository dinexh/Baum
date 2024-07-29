import TreeMission from '../../Assets/missionImage.png';
import React, { useRef, useState, useEffect } from 'react';
import './mission.css';

const Mission = () => {
    const [isVisible, setIsVisible] = useState(false); // Corrected variable name
    const missionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Corrected function name
                } else {
                    setIsVisible(false); // Corrected function name
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

    return (
        <div className={`mission-container ${isVisible ? 'visible' : ''}`} ref={missionRef}>
            <div className="mission-container-in">
                <div className="mission-container-in-one">
                    <img src={TreeMission} className='missiontree' alt="Mission" />
                </div>
                <div className="mission-container-in-two">
                    <h3>
                        Panchatantra is an ambitious project aimed at fostering the development of urban and rural forestries to protect our planet. Our goal is to empower every student to establish and nurture forests in their respective areas. By actively participating in tree planting initiatives and creating water bodies, we aim to significantly improve groundwater levels, ensuring a sustainable and greener future.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Mission;
