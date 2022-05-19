import React from 'react'
import './Sidebar.css'
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3><NavLink to="/">Home</NavLink></h3>
            <h3><NavLink to="/explore">Explore</NavLink></h3>
            <h3><NavLink to="/stories">Stories</NavLink></h3>
            <h3><NavLink to="/upload">Upload</NavLink></h3>
            <h3><NavLink to="/profile">Profile</NavLink></h3>
            <h3><NavLink to="/settings">Settings</NavLink></h3>
        </div>
    )
}

export default Sidebar
