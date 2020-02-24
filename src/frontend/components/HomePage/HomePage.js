import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo-white.svg'
import firebase from '../firebase'
import './HomePage.css'

export default function HomePage() {
    return (
        <div className='App home-page'>
             <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <Link to='/login'>
                <button
                    type='submit'
                    className='button solid button-main'
                >
                    <h1>Log in</h1>
                </button>
            </Link>
            <Link to='register'>
                <button
                    type='submit'
                    className='button hollow button-secondary'
                >
                    <h1>Create Account</h1>
                </button>
            </Link>
            {
                firebase.getCurrentUsername() ?
                    <Link to='/dashboard'>
                        <button
                            type='submit'
                            className='button hollow button-tertiary'
                        >
                            <h1>Dashboard</h1>
                        </button>
                    </Link> :
                    null
            }
        </div>
    );
}