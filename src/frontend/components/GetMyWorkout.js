import React from 'react'
import Start from './Start'
import GenderQuestions from './GenderQuestions'
import BackButton from './BackButton'
import WorkoutGoalQuestions from './WorkoutGoalQuestions'
import WorkoutLocationQuestions from './WorkoutLocationQuestions'
import Results from './Results'
import './GetMyWorkout.css'

export default class GetMyWorkout extends React.Component {

    constructor() {
        super();
        this.state = { 
            currentPageNumber: 0,
            optionsSelected: {
                Gender: '',
                Goal: '',
                Location: ''
            }
        };
    }

    toggleBackwards() {
        this.setState({
            currentPageNumber: this.state.currentPageNumber - 1,
        })
    }

    toggleQuestions() {
        this.setState({ 
            currentPageNumber: this.state.currentPageNumber + 1
        })
    }

    toggleMale() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Gender: 'Male'
                }
            })
        )
    }
        
    toggleFemale() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Gender: 'Female'
                }
            })
        )
    }

    toggleBodyFat() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Goal: 'Lower your Body Fat'
                }
            })
        )
    }

    toggleMuscle() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Goal: 'Increase your Muscle Mass'
                }
            })
        )
    }

    toggleCV() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Goal: 'Improve your CV Capacity'
                }
            })
        )
    }

    toggleGym() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Location: 'the Gym'
                }
            })
        )
    }

    toggleHome() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Location: 'Home'
                }
            })
        )
    }

    toggleBoth() {
        this.setState( 
            prevState => ({
                currentPageNumber: this.state.currentPageNumber + 1,
                optionsSelected: {
                    ...prevState.optionsSelected,
                    Location: 'both the Gym & at Home'
                }
            })
        )
    }

    render() {
        console.log(this.state)
        let { currentPageNumber, optionsSelected: { Gender, Goal, Location } } = this.state;
        return (
            <div className='GetMyWorkout'>
            <BackButton 
                backButtonClicked={() => this.toggleBackwards()}
                currentPageNumber={currentPageNumber}
            />
            <Start 
                currentPageNumber={currentPageNumber}
                getWorkoutButtonClicked={() => this.toggleQuestions()}
            />
            <GenderQuestions
                currentPageNumber={currentPageNumber}
                maleButtonClicked={() => this.toggleMale()}
                femaleButtonClicked={() => this.toggleFemale()}
            />
            <WorkoutGoalQuestions
                currentPageNumber={currentPageNumber}
                bodyFatButtonClicked={() => this.toggleBodyFat()}
                muscleButtonClicked={() => this.toggleMuscle()}
                cvButtonClicked={() => this.toggleCV()}
            />
            <WorkoutLocationQuestions
                currentPageNumber={currentPageNumber}
                gymButtonClicked={() => this.toggleGym()}
                homeButtonClicked={() => this.toggleHome()}
                bothButtonClicked={() => this.toggleBoth()}
            />
            <Results 
                currentPageNumber={currentPageNumber}
                genderQuestionResult={Gender}
                goalQuestionResult={Goal}
                locationQuestionResult={Location}
            />
            </div>
        );
    }
}