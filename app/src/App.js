import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero/hero';
import Nav from './Components/Nav/nav';
import Contact from './Components/Contact/Contact';
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
            <Mission />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
