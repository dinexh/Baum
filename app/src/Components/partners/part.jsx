import React, { useRef, useEffect } from "react";
import './part.css';
import { partdata } from '../../Data/partner';

const Part = () => {
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
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <div className="partner-container" ref={containerRef}>
            <div className="partner-container-in">
                <div className="partner-container-heading">
                    <h1>Our Proud <span>Partners</span></h1>
                </div>
                <div className="com-group">
                    {partdata.map((partner) => (
                        <div className="com" key={partner.id}>
                            <img src={partner.img} alt={`Partner ${partner.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Part;
