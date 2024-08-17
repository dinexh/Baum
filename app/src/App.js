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
import Part from './Components/partners/part';
import VisibleOnScroll from './Components/Loaders/VisibleOnScroll';

const App = () => {
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
                            <VisibleOnScroll className="hero"><Hero /></VisibleOnScroll>
                            <VisibleOnScroll className="mission"><Mission /></VisibleOnScroll>
                            <VisibleOnScroll className="objectives"><Objectives /></VisibleOnScroll>
                            <VisibleOnScroll className="activity"><Activity /></VisibleOnScroll>
                            <VisibleOnScroll className="part"><Part /></VisibleOnScroll>
                            <VisibleOnScroll className="footer"><Footer /></VisibleOnScroll>
                        </>
                    } />
                    <Route path="/Auth" element={<VisibleOnScroll className="auth"><Auth /></VisibleOnScroll>} />
                    <Route path="/blog/:id" element={<VisibleOnScroll className="blog"><Blog /></VisibleOnScroll>} />
                    <Route path="/activity/:id" element={<VisibleOnScroll className="activityBlog"><Activity_blog /></VisibleOnScroll>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;