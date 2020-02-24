import React from 'react'
import './WorkoutLocationQuestions.css'

export default function WorkoutLocationQuestions ({
    currentPageNumber, gymButtonClicked, homeButtonClicked, bothButtonClicked 
}) {
    return (
        <div className={`LocationQuestions ${
            currentPageNumber === 3 ? 
            'ShowLocationQuestions' :
            currentPageNumber > 3 ?
                'HideLocationQuestions' :
                ''}`
        }>
            <h1 className='questions'>Where do you want to workout...</h1>
            <button
                className='gym-button'
                onClick={gymButtonClicked}
            >
                <h1>Gym</h1>
            </button>
            <button
                className='home-button'
                onClick={homeButtonClicked}
            >
                <h1>Home</h1>
            </button>
            <button
                className='both-button'
                onClick={bothButtonClicked}
            >
                <h1>Both</h1>
            </button>
        </div>
    );
}