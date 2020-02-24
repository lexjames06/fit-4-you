import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo-white.svg'
import './Login.css'

export default function Login() {
    return (
        <div className='App login'>
             <div className='logo login'>
                <img src={logo} alt='' />
            </div>
            <form className='form login' onSubmit={e => e.preventDefault() && false}>
                <input id='email' name='email' type='email' placeholder='example@gmail.com'/>
                <input id='password' name='password' type='password' placeholder='password'/>
                <button
                    type='submit'
                    // onClick={}
                    className='button login'
                >
                    <h1>Log in</h1>
                </button>
            </form>
        </div>
    );
}