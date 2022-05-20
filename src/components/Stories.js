import React,{useState} from 'react'
import Modal from 'react-modal';
import "./Stories.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus,faXmark} from "@fortawesome/free-solid-svg-icons";
import ppost from '../assets/3.jpg';
import Topics from '../components/Topics'
import Posts from "../components/Posts"
const Stories = () => {
    const [moadalIsOpen, setModalIsOpen]=useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return (
        <div className="story_topics">
        <div className="stories">
            <div className="add-story">
            <FontAwesomeIcon 
            className="plus"
            onClick={setModalIsOpenToTrue}
            icon={faPlus}/>
             <Modal 
            isOpen={moadalIsOpen}
            className="story-moadal">
                <div className="add-story-modal">
                    <div className="ad-sty-mod1">
                    <p>Create your new story</p>
                    <FontAwesomeIcon  
                    className="icons"
                    onClick={setModalIsOpenToFalse} 
                    icon={faXmark}/>
                    </div>
                    <hr></hr>
                    <div className="up-frm-pc">
                          <p>upload from device</p>
                          <button  className="btn up-btn" type="select">Select</button>

                    </div>
                    <div className="add-story-btn">
                     <p>add</p>
                    </div>
                </div>
               
            </Modal>
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
