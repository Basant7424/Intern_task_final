import React from 'react';
import '../App.css';
import {AiOutlineLike} from 'react-icons/ai';
import {GoComment} from 'react-icons/go';
import {RiShareForwardLine} from 'react-icons/ri';
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import {BiWorld} from 'react-icons/bi';
import logo from '../batingo-logo.png';

const SocialCard = () => {
    return (
        <div className="social-card card-preview">
            <div className="card-header">
                <div>
                    <img src={logo} alt="batingo-logo" />
                </div>
                <div>
                    <p>Batingo11</p>
                    <p>Today at 6:29 PM &bull; <BiWorld/></p>
                </div>
                <div>
                    <BiDotsHorizontalRounded size="30px"/>
                </div>

            </div>
            <div className="card-body">
            Our user wants to write an article, so we want to help them with previews of the article before publishing. Your task is to create a layout as shown in the below image, on the left side there is a text box with some dummy buttons. When a user writes something on the textbox, there is a preview available for the same on the right side and the user has the option to preview the post for different devices.

            </div>
            <div className="card-footer">
                <div className="icons">
                    <AiOutlineLike color="#898F9C" size="25px"/>
                    <span>Like</span>
                </div>
                <div className="icons">
                    <GoComment color="#898F9C" size="25px"/>
                    <span>Comment</span>
                </div>
                <div className="icons">
                    <RiShareForwardLine color="#898F9C" size="25px"/>
                    <span>Share</span>
                </div>
            </div>
        </div>
    )
};

export default SocialCard;