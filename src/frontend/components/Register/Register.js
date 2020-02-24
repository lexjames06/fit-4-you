import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo-white.svg'
import './Register.css'

export default function Register() {
    return (
        <div className='App register'>
             <div className='logo register'>
                <img src={logo} alt='' />
            </div>
            <form className='form register' onSubmit={e => e.preventDefault() && false}>
                <input id='username' name='userName' type='text' placeholder='username'/>
                <input id='email' name='email' type='email' placeholder='example@gmail.com'/>
                <input id='password' name='password' type='password' placeholder='password'/>
                <button
                    type='submit'
                    // onClick={}
                    className='button register'
                >
                    <h1>Create Account</h1>
                </button>
            </form>
        </div>
    );
}