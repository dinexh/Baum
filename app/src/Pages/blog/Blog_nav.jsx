import React from 'react';
import './blog.css'
import { objectives } from '../../Components/objectives/data';

const BlogNav = () => {
    const { title, author, image } = objectives[0]; // Using the first objective's data

    return (
        <header className="header">
            <div className="header-top">
                <p>Back Home</p>
                <p>Help</p>
            </div>
            <div className="header-main">
                <div className="header-main-content">
                    <h1 className="header-title">{title}</h1>
                    <div className="header-author">
                        {/* <img src={author.image} alt={author.name} className="author-image" /> */}
                        <div className="author-info">
                            <h2 className="author-name">{author.name}</h2>
                            <p className="author-title">{author.title}</p>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <img src="https://cdn.prod.website-files.com/5f778340ed26b167bd087abe/634ac8b936d9ff52a6d3b395_leaves2%20mono.png" alt="Blog Visual" className='blog_image' />
                </div>
            </div>
        </header>
    );
}

export default BlogNav;
