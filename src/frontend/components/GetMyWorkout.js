import React from 'react'
import Start from './Start'
import GenderQuestions from './GenderQuestions'
import './GetMyWorkout.css'

export default class GetMyWorkout extends React.Component {

    constructor() {
        super();
        this.state = { getWorkoutButtonClicked: false, maleQuestions: false, femaleQuestions: false, backButton: 0 };
    }

    toggleBackwards() {
        this.setState({ backButton: this.state.backButton - 1 })
    }

    toggleQuestions() {
        this.setState({ 
            getWorkoutButtonClicked: !this.state.getWorkoutButtonClicked,
            backButton: this.state.backButton + 1 
        })
    }

    toggleMaleQuestions() {
        this.setState({ 
            maleQuestions: !this.state.maleQuestions, 
            getWorkoutButtonClicked: !this.state.getWorkoutButtonClicked, 
            backButton: this.state.backButton + 1 
        })
    }
        
    toggleFemaleQuestions() {
        this.setState({ 
            femaleQuestions: !this.state.femaleQuestions, 
            getWorkoutButtonClicked: !this.state.getWorkoutButtonClicked, 
            backButton: this.state.backButton + 1 
        })
    }

    render() {
        let { getWorkoutButtonClicked, maleQuestions, femaleQuestions } = this.state;
        let toggleQuestions = () => this.toggleQuestions();
        let toggleMaleQuestions = () => this.toggleMaleQuestions();
        let toggleFemaleQuestions = () => this.toggleFemaleQuestions();
        // let { backButton } = this.state
        // return (
        //     <div className='GetMyWorkout'> {

        //         backButton = {backButton}
        //         let backButtonOptions = [
                    <Start 
                        getWorkoutButtonClicked={getWorkoutButtonClicked}
                        isMaleButtonClicked={maleQuestions}
                        isFemaleButtonClicked={femaleQuestions}
                        backButtonClicked={toggleBackwards}
                    />,
                    <GenderQuestions
                        getWorkoutButtonClicked={getWorkoutButtonClicked}
                        isMaleButtonClicked={maleQuestions}
                        isFemaleButtonClicked={femaleQuestions}
                        backButtonClicked={toggleQuestions}
                        maleButtonClicked={toggleMaleQuestions}
                        femaleButtonClicked={toggleFemaleQuestions}
                    />,
                    <MaleQuestions
                        maleButtonClicked={maleQuestions}
                    />,
                    <FemaleQuestions
                        femaleButtonClicked={femaleQuestions}
                    />
                ];
                // return backButtonOptions[backbutton];
            }
            </div>
        );
    }
}

function MaleQuestions({ maleButtonClicked }) {
    return (
        <div className={`MaleQuestions ${maleButtonClicked ? 'ShowMaleQuestions' : ''}`}>
            <h1 className='questions'>Male Questions</h1>
        </div>
    );
}

function FemaleQuestions({ femaleButtonClicked }) {
    return (
        <div className={`FemaleQuestions ${femaleButtonClicked ? 'ShowFemaleQuestions' : ''}`}>
            <h1 className='questions'>Female Questions</h1>
        </div>
    );
}