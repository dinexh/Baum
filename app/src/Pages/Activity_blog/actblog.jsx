import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Activity_data } from '../../Data/activity_data';
import './actblog.css';

const ActivityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const activity = Activity_data.find((act) => act.id === parseInt(id));
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    if (!activity) {
        return <p>Activity not found</p>;
    }

    return (
        <div className="activity-blog-container">
            <div className="activity-blog-container-in">
                <div className="activity-blog-detail-nav">
                    <p onClick={() => navigate('/')}>Back to Activities</p>
                    <p>Help</p>
                </div>
                <div className="activity-blog-detail-content">
                    <h1>{activity.title}</h1>
                    <img src={activity.image} alt={activity.title} />
                    <p>{activity.discription}</p>
                    <div className="activity-blog-detail-blog">
                        <p>{activity.blog_data}</p>
                    </div>
                </div>
                <div className="activity-blog-footer">
                    <p>Designed and Developed by <a href="#">Dinesh Korukonda</a> | <span>ZeroOne Code Club</span></p>
                </div>
            </div>
        </div>
    );
};

export default ActivityDetail;
