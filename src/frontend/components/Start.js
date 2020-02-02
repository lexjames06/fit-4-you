import React from 'react'
import logo from '../assets/svg/logo-white.svg'
import './Start.css'

export default function Start({
    getWorkoutButtonClicked, isMaleButtonClicked, isFemaleButtonClicked, backButtonClicked
}) {
    let anyButtonClicked = getWorkoutButtonClicked || isMaleButtonClicked || isFemaleButtonClicked;
    return (
        <div className={`start ${anyButtonClicked ? 'hide-start' : ''}`}>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <button
                className='start-button'
                onClick={backButtonClicked}
            >
                <h1>Get My Workout</h1>
            </button>
        </div>
    );
}