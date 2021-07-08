import React from 'react';
import Button from '../UIElements/Button';
import '../App.css';
import SocialCard from './SocialCard';
import {RiFacebookCircleLine} from 'react-icons/ri'

const PreviewPage = () => {
    return (
        <div className="preview-page">
            <div className="card-left">
                <div className="left-header">
                    <Button text="Facebook" fontColor="#4267B2"/>
                    <Button text="Instagram" fontColor="#898F9C"/>
                </div>
                <div className="left-body">
                    <h2>Customize Your Post</h2>
                    <p>These features and text will only appear in your Facebook post.</p>

                    <p className="input-title">Sample Text</p>

                    <textarea rows="30" placeholder="Our user wants to write an article, so we want to help them with previews of the article before publishing. Your task is to create a layout as shown in the below image, on the left side there is a text box with some dummy buttons. When a user writes something on the textbox, there is a preview available for the same on the right side and the user has the option to preview the post for different devices.">
                    </textarea>
                
                
                </div>
            </div>
            <div className="card-right">
                <div className="header-right">
                    <div>
                        <h2>Preview</h2>
                        <p><RiFacebookCircleLine style={{transform : 'translateY(2px)', marginRight : '5px'}}/>Mobile News Feed</p>
                    </div>
                    <div>
                        <Button text="Preview all" fontColor="#898F9C"/>
                    </div>
                </div>
                <div className="right-body">
                    
                        <SocialCard />
                    
                </div>
            </div>
        </div>
    )
};

export default PreviewPage;