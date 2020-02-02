import React from 'react'
import './GenderQuestions.css'

export default function GenderQuestions({
    currentPageNumber, maleButtonClicked, femaleButtonClicked
}) {
    return (
        <div className={`GenderQuestions ${
            currentPageNumber === 1 ?
                'ShowGenderQuestions' :
                currentPageNumber > 1 ?
                    'HideGenderQuestions' :
                    ''
            }`}>
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