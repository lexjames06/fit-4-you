import React from 'react'
import './Results.css'

export default function Results({ 
    currentPageNumber, genderQuestionResult, goalQuestionResult, locationQuestionResult
}) {
    return (
        <div className={`Results ${
            currentPageNumber === 4 ?
                'ShowResults' :
                ''
            }`}>
            <h1 className='question'>
                You are a
            </h1>
            <h2 className='question input'>
                {genderQuestionResult}
            </h2>
            <h1 className='question'>
                looking to
            </h1>
            <h2 className='question input'>
                {goalQuestionResult} 
            </h2>
            <h1 className='question'>
                at
            </h1>
            <h2 className='question input'>
                {locationQuestionResult}
            </h2>
        </div>
    );
}