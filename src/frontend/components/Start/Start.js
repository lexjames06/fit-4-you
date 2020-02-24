import React from 'react'
import logo from '../../assets/svg/logo-white.svg'
import './Start.css'

export default function Start({
    getWorkoutButtonClicked, currentPageNumber
}) {
    return (
        <div className={`start ${currentPageNumber > 0 ? 'hide-start' : ''}`}>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <button
                className='start-button'
                onClick={getWorkoutButtonClicked}
            >
                <h1>Get My Workout</h1>
            </button>
        </div>
    );
}