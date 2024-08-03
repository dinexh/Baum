import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './blog.css';
import { objectives } from '../../Data/Objectives_data';

const Blog = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 

    const blogPost = objectives.find((objective) => objective.id === parseInt(id));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if (!blogPost) {
        return <p>Blog post not found</p>; 
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="blog-container">
            <div className="blog-nav">
                <p onClick={() => navigate('/')}>Back Home</p>
                <p>Help</p>
            </div>
            <div className="blog-home">
                <div className="blog-home-in">
                    <div className="blog-header">
                        <div className="blog-header-one">
                            <h1>{blogPost.title}</h1>
                            <h2>Author - {blogPost.author.name}</h2>
                            <p>{blogPost.description}</p>
                        </div>
                        <div className="blog-header-two">
                            <p>Published Date: 12-12-2021</p>
                            <p>Updated Date: 12-12-2021</p>
                        </div>
                    </div>
                    <div className="blog-home-content">
                        <img src={blogPost.image} alt={blogPost.title} className="blog-image" />
                        <p>{blogPost.blog_data}</p>
                    </div>
                </div>
            </div>
            <div className="blog-footer">
                <p>Designed and Developed by <a href="#">Dinesh Korukonda</a> | <span>ZeroOne Code Club</span></p>
            </div>
            <button className="back-to-top" onClick={scrollToTop}>Top</button>
        </div>
    );
}

export default Blog;
