import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero/hero';
import Nav from './Components/Nav/nav';
import Latest from './Components/latest/latest';
// import Contact from './Components/Contact/Contact';
import Number from './Components/number/number';
import Footer from './Components/Footer/footer';
import Mission from './Components/mission/mission';

function App() {
    const [showNav, doShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                doShowNav(true);
            } else {
                doShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            {showNav && <Nav />}
            <Hero />
            <Latest />
            {/* <Number 
                targetEvents={40}
                targetPlants={20}
                targetTrees={10}
                targetVillages={100}    
            /> */}
            <Mission />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
