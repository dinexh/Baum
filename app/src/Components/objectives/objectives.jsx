import React, { useRef, useEffect } from 'react';
import './objectives.css';
import { objectives } from './data';
import Object_Image from "../../Assets/EventImage.jpg";

const Objectives = () => {
    const containerRef = useRef(null);
    const BlogPage = () => {
        window.location.href = '/Blog';
    }
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
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="object-container" ref={containerRef}>
            <div className="object-container-in">
                <div className="object-heading">
                    <h1>What we <span>do?</span></h1>
                </div>
                <div className="object-main">
                        <div className="object-boxes">
                            {objectives.map((objective) => (
                                <div className="object-box" key={objective.id}>
                                    <img src={objective.image} className="BoxImage" alt={objective.title} />
                                    <div className="box-matter">
                                        <h4>{objective.title}</h4>
                                        <p>{objective.description}</p>
                                    </div>
                                    <div className="box-button">
                                        <button onClick={BlogPage}>→</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Objectives;
