import React from 'react'
import "./Stories.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus} from "@fortawesome/free-solid-svg-icons";
import ppost from '../assets/3.jpg';
import Topics from '../components/Topics'
import Posts from "../components/Posts"
const Stories = () => {
    return (
        <div className="story_topics">
        <div className="stories">
            <div className="add-story">
            <FontAwesomeIcon className="plus" icon={faPlus}/>
            </div>
            <div className="story">
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            <img src={ppost} alt="post"/>
            
            </div>
            </div>
            {/* <Posts/> */}
            {/* <Topics/> */}
        </div>
    )
}

export default Stories
