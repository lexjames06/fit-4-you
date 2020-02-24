import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo-white.svg'
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
                    className='button solid'
                >
                    <h1>Log in</h1>
                </button>
            </Link>
            <Link to='register'>
                <button
                    type='submit'
                    component={Link}
                    to='/register'
                    className='button hollow mt-20'
                >
                    <h1>Create Account</h1>
                </button>
            </Link>
        </div>
    );
}