import React from 'react'
import back from '../../assets/svg/back.svg'
import './BackButton.css'

export default function BackButton({ backButtonClicked, currentPageNumber }) {
    return (
        <button
            className={`BackButton ${
                currentPageNumber > 0 ?
                    'ShowBackButton' :
                    ''
                }`}
            onClick={backButtonClicked}
        >
            <img className='back-button-icon' src={back} alt='' />
        </button>
    );
}