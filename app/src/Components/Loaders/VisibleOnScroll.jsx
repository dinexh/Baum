import React, { useEffect, useRef, useState } from 'react';

const VisibleOnScroll = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`${className} ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default VisibleOnScroll;
