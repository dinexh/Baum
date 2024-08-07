import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import Hero from './Components/Hero/hero';
import Nav from './Components/Nav/nav';
import Footer from './Components/Footer/footer';
import Objectives from './Components/objectives/objectives';
import Mission from './Components/mission/mission';
import Blog from './Pages/blog/blog';
import Activity from './Components/Activty/activity';
import Impact from './Components/impact/impact';
import Activity_blog from './Pages/Activity_blog/actblog';

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
                    <Route path="/" element={
                        <>
                            <Nav show={showNav} />
                            <div id="hero">
                                <Hero />
                            </div>
                            <div id="mission">
                                <Mission />
                            </div>
                            <div id="objectives">
                                <Objectives />
                            </div>
                            <div id="activities">
                                <Activity />
                            </div>
                            <div id="impact">
                                <Impact />
                            </div>
                            <Footer />
                        </>
                    } />
                    <Route path="/Auth" element={<Auth />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    {/* <Route path="/activities" element={<Activity />} /> */}
                <Route path="/activity/:id" element={<Activity_blog/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
