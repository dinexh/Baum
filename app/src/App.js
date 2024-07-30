import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Components/Hero/hero';
import Nav from './Components/Nav/nav';
import Latest from './Components/latest/latest';
import Number from './Components/number/number';
import Footer from './Components/Footer/footer';
import Objectives from './Components/objectives/objectives';
import Mission from './Components/mission/mission';

function App() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <Nav show={showNav} />
            <Hero />
            
            {/* <Latest /> */}
            {/* <Number 
                targetEvents={40}
                targetPlants={20}
                targetTrees={10}
                targetVillages={100}    
            */}
            <Mission/>
            <Objectives/>
            <Footer />
        </div>
    );
}

export default App;
