import React , {Component} from 'react';
import { Link , NavLink } from 'react-router-dom';
const Nav = () => {
    return(
    <div className="navbar">
        <div className="container">
            <a href="">Logo</a>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>  
            </ul>
        </div>
    </div>
    )
}
export default Nav;