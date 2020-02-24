import React from 'react'
import './WorkoutGoalQuestions.css'

export default function WorkoutGoalQuestions({ 
    currentPageNumber, bodyFatButtonClicked, muscleButtonClicked, cvButtonClicked 
}) {
    return (
        <div className={`GoalQuestions ${
            currentPageNumber === 2 ? 
            'ShowGoalQuestions' :
            currentPageNumber > 2 ?
                'HideGoalQuestions' :
                ''}`
        }>
            <h1 className='questions'>What is your goal...</h1>
            <button
                className='bodyfat-button'
                onClick={bodyFatButtonClicked}
            >
                <h1>Body Fat Loss</h1>
            </button>
            <button
                className='muscle-button'
                onClick={muscleButtonClicked}
            >
                <h1>Muscle Gain</h1>
            </button>
            <button
                className='cv-button'
                onClick={cvButtonClicked}
            >
                <h1>Improve CV</h1>
            </button>
        </div>
    );
}