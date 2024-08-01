import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Auth from './Pages/Auth/Auth'
import Auth from './Pages/Auth/Auth';
import Hero from './Components/Hero/hero';
import Nav from './Components/Nav/nav';
import Footer from './Components/Footer/footer';
import Objectives from './Components/objectives/objectives';
import Mission from './Components/mission/mission';
import Blog from './Pages/blog/blog';

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
        <Router>
        <div className="App">
            <Routes>
                <Route exact path="/" element={
                    <>
                       <Nav show={showNav} />
                        <Hero />
                        <Mission />
                        <Objectives />
                        <Footer />
                    </>
                } />
                /* <Route path="/Auth" element={<Auth />} /> */
                <Route path = "/Blog" element={<Blog />} />
            </Routes>
        </div>
    </Router>
    );
}

export default App;
