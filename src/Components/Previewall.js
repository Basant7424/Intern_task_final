import React from 'react';
import '../Wall.css';
import SocialCard from './SocialCard';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FaInstagram} from 'react-icons/fa';
import Unavailable from './InstaCard';
import FullPreview from './DesktopPreview';

const PreviewWall = () => {
    return (
        <div className="preview-wall">
            <div className="card">
                <p className="label-text">
                    <RiFacebookCircleLine style={{transform : 'translateY(2px)', marginRight : '5px'}}/>
                    Desktop News Feed
                </p>
                <div className="card-area preview-card">
                    <FullPreview/>
                </div>
            </div>
            <div className="card">
                <p className="label-text">
                    <RiFacebookCircleLine style={{transform : 'translateY(2px)', marginRight : '5px'}}/>
                    Mobile News Feed
                </p>
                <div className="card-area preview-card">
                    <SocialCard/>
                </div>
            </div>
            <div className="card">
                <p className="label-text">
                    <FaInstagram style={{transform : 'translateY(2px)', marginRight : '5px'}}/>
                    Instagram Feed
                </p>
                <div className="card-area">
                    <Unavailable/>
                </div>
            </div>
        </div>
    )
};

export default PreviewWall;