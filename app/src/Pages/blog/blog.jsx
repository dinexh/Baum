import './blog.css';
import Blog_home from './blog-home'
import BlogNav from './Blog_nav';
import BlogFooter from './Blog_footer';
import React from 'react';
const Blog = () => {
    return ( 
        <div className="blog-container">
            <BlogNav />
            <Blog_home />
            <BlogFooter />
        </div>
    );
}
 
export default Blog;