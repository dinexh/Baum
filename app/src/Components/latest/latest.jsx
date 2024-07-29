import React, { useEffect, useRef } from 'react';
import './latest.css';
import EventImage from '../../Assets/EventImage.jpg';

const events = [
    { id: 1, name: 'Event 1', image: EventImage },
    { id: 2, name: 'Event 2', image: EventImage },
    { id: 3, name: 'Event 3', image: EventImage },
    { id: 4, name: 'Event 4', image: EventImage },
];

const Latest = () => {
    const latestRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    latestRef.current.classList.add('in-view');
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (latestRef.current) {
            observer.observe(latestRef.current);
        }

        return () => {
            if (latestRef.current) {
                observer.unobserve(latestRef.current);
            }
        };
    }, []);

    return (
        <div ref={latestRef} className="latest-container">
            <div className="latest-container-in">
                <div className="latest-container-heading">
                    <h1>Latest Events</h1>
                </div>
                <div className="latest-container-main">
                    <div className="latest-container-main-in">
                        {events.map(event => (
                            <div
                                key={event.id}
                                className="latest-container-main-box"
                                style={{ backgroundImage: `url(${event.image})` }}
                            >
                                <h1>{event.name}</h1>
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Latest;
