// import something from "somewhere";
import React from 'react';
import './Tophead.css';

// Function Defination Area
function Tophead() {
    return (
        <>
            <div className='tophead'>
                <div className='left'>
                    <span>Welcome Guest</span>
                    <a href='javascript:void()'>Login</a>
                    <a href='javascript:void()'>Sign Up</a>
                </div>
                <div className='right'>
                <span>Stay Updated</span>
                    <a href='javascript:void()'>Subscribe Via RSS</a>
                    <a href='javascript:void()'>Email Updated</a>
                </div>
            </div>
        </>
    );
}

// Exporting Area
export default Tophead;
