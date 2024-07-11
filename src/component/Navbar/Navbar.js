// import something from "somewhere";
import React from 'react';
import './Navbar.css';

// Function defination Area
function Navbar(){
    return(
        <div className='Navbar'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Content</li>
            </ul>
        </div>
    );
}

// Exporting Area
export default Navbar;