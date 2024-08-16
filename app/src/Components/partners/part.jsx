import React from 'react';
import './part.css';
import { partdata } from '../../Data/partner';
import VisibleOnScroll from '../Loaders/VisibleOnScroll';

const Part = () => {
    return ( 
        <VisibleOnScroll>
            <div className="partner-container">
                <div className="partner-container-in">
                    <div className="partner-container-heading">
                        <h1>Our Proud <span>Partners</span></h1>
                    </div>
                    <div className="com-group">
                        <div className="com-group-in">
                            {partdata.map((partner) => (
                                <div className="com" key={partner.id}>
                                    <img src={partner.img} alt={`Partner ${partner.id}`} />
                                </div>
                            ))}
                        </div>
                        <div className="com-group-in">
                            {partdata.map((partner) => (
                                <div className="com" key={partner.id}>
                                    <img src={partner.img} alt={`Partner ${partner.id}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </VisibleOnScroll>
    );
}

export default Part;
