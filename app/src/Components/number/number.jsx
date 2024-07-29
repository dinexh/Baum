import React, { useState, useEffect, useRef } from 'react';
import './number.css';

const Number = ({ targetPlants, targetTrees, targetEvents, targetVillages }) => {
    const [plants, setPlants] = useState(0);
    const [trees, setTrees] = useState(0);
    const [events, setEvents] = useState(0);
    const [villages, setVillages] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setHasStarted(true);
            }
        };

        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        const plantInterval = setInterval(() => {
            setPlants((prev) => {
                if (prev >= targetPlants) {
                    clearInterval(plantInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 50);

        const treeInterval = setInterval(() => {
            setTrees((prev) => {
                if (prev >= targetTrees) {
                    clearInterval(treeInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 50);

        const eventInterval = setInterval(() => {
            setEvents((prev) => {
                if (prev >= targetEvents) {
                    clearInterval(eventInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 50);

        const villageInterval = setInterval(() => {
            setVillages((prev) => {
                if (prev >= targetVillages) {
                    clearInterval(villageInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 50);

        return () => {
            clearInterval(plantInterval);
            clearInterval(treeInterval);
            clearInterval(eventInterval);
            clearInterval(villageInterval);
        };
    }, [hasStarted, targetPlants, targetTrees, targetEvents, targetVillages]);

    return (
        <div className="number-container" ref={ref}>
            <div className="number-container-in">
                <h1>Our Numbers speak for themselves</h1>
                <div className="main-container">
                    <div className="main-container-in">
                        <p>Number of Plants Planted</p>
                        <p>
                            <span>{plants}</span>
                        </p>
                    </div>
                </div>
                <div className="group-container">
                    <div className="group-container-in">
                        <div className="group-box">
                            <p>Number of Trees</p>
                            <p>
                                <span>{trees}</span>
                            </p>
                        </div>
                        <div className="group-box">
                            <p>Number of Events</p>
                            <p>
                                <span>{events}</span>
                            </p>
                        </div>
                        <div className="group-box">
                            <p>Number of Villages</p>
                            <p>
                                <span>{villages}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Number;
