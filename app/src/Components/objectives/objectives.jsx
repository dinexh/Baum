import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './objectives.css';
import { objectives } from '../../Data/Objectives_data';
import VisibleOnScroll from '../Loaders/VisibleOnScroll'; // Update path as needed

const Objectives = () => {
    const navigate = useNavigate();  

    const handleBlogNavigation = (id) => {
        navigate(`/blog/${id}`); 
    }

    return (
        <VisibleOnScroll>
            <div className="object-container">
                <div className="object-container-in">
                    <div className="object-heading">
                        <h1>What we <span>do?</span></h1>
                    </div>
                    <div className="object-main">
                        <div className="object-boxes">
                            {objectives.map((objective) => (
                                <div className="object-box" key={objective.id}>
                                    <img src={objective.image} className="BoxImage" alt={objective.title} />
                                    <div className="box-matter">
                                        <h4>{objective.title}</h4>
                                        <p>{objective.description}</p>
                                    </div>
                                    <div className="box-button">
                                        <button onClick={() => handleBlogNavigation(objective.id)}>→</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </VisibleOnScroll>
    );
}

export default Objectives;
