import React from 'react';
import '../Wall.css';
import Preview from '../preview.png';

const Unavailable = () => {
    return (
        <div className="card-unavailable">
            <p>
                <img src={Preview} alt="Preview Unavailable" height="200"/>
            </p>
            <p className="preview-heading">
                Preview Unavailable                
            </p>
            <p className="preview-error">
                The post preview can't be displayed right now.
            </p>
        </div>
    );
};

export default Unavailable;