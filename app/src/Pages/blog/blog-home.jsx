import React from 'react';
import './blog.css';
import { objectives } from '../../Components/objectives/data'; 

const Blog_home = () => {
    return (  
        <div className="blog-home-container">
            {objectives.map((objective) => (
                <div key={objective.id} className="blog-home-container-in">
                    <div className="home-in-one">
                        <p>{objective.blog_data}</p>
                        {/* <p>Author: {objective.author.name}</p> */}
                    </div>
                    <div className="home-in-image">
                        <img src={objective.image} alt={objective.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Blog_home;
