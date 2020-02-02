import React from 'react'
import './GenderQuestions.css'

export default function GenderQuestions({ 
    getWorkoutButtonClicked, backButtonClicked, isMaleButtonClicked, isFemaleButtonClicked,
    maleButtonClicked, femaleButtonClicked
}) {
    return (
        <div className={`GenderQuestions ${
            getWorkoutButtonClicked ? 
            'ShowGenderQuestions' :
            isMaleButtonClicked || isFemaleButtonClicked ?
                'HideGenderQuestions' : 
                ''
        }`}>
            <button 
                className='BackButton'
                onClick={backButtonClicked}
            >
                <h1>Back</h1>
            </button>
            <h1 className='questions'>Select the Most Appropriate...</h1>
            <button 
                className='male-button'
                onClick={maleButtonClicked}
            >
                <h1>Male</h1>
            </button>
            <button 
                className='female-button'
                onClick={femaleButtonClicked}
            >
                <h1>Female</h1>
            </button>
        </div>
    );
}