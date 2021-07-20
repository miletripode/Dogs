import React from 'react';
import './LandingPage.css';
import {NavLink} from 'react-router-dom' 

function LandingPage(){

    return (
        <div className='landingPage'>
            <NavLink className="navlink" to ='/home'>
                <span id='text'>Enter</span>
            </NavLink>
        </div>
    )
}

export default LandingPage