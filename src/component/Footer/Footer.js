// import something from "somewhere";
import React from 'react';
import './Footer.css';

// Function Defination Area
function Footer(){
    return(
        <div className='last'>
            <div className='footer'>
                <ul>
                    <li><a href='javascript:void()'>Links</a></li>
                    <li><a href='javascript:void()'>Follow for more update</a></li>
                    <li><a href='javascript:void()'>Copy Right</a></li>
                </ul>
            </div>
            <div className='creator'>
                <h1>Created by : Anamika Solanki</h1>
            </div>
        </div>
    );
}

// Export Area
export default Footer;