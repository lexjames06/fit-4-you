import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/svg/logo-white.svg'
import eye from '../../assets/svg/eye.svg'
import back from '../../assets/svg/back.svg'
import firebase from '../firebase'
import './Login.css'

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [passwordVisibility, setPasswordVisibility] = useState (false);

    async function login() {
       try{
            await firebase.login(email, password);
            props.history.replace('/dashboard');
        } catch(error) {
            alert(error.message)
        }
    }

    function togglePasswordVisibility() {
        setPasswordVisibility(!passwordVisibility);
    }

    return (
        <div className='App login'>
            <Link to='/'>
                <button className='BackButton ShowBackButton'>
                    <img className='back-button-icon' src={back} alt='' />
                </button>
            </Link>
             <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <form className='form' onSubmit={e => e.preventDefault() && false}>
                <input 
                    id='email' 
                    name='email' 
                    type='email'
                    className='input middle'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='example@gmail.com'/>
                <input 
                    id='password' 
                    name='password' 
                    type={passwordVisibility ? 'text' : 'password'} 
                    className='input bottom'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password' />
                <img 
                    className='show-password' 
                    src={eye} 
                    alt='show/hide password'
                    onClick={togglePasswordVisibility} />
                <button
                    type='submit'
                    onClick={login}
                    className='button solid button-main'
                >
                    <h1>Log in</h1>
                </button>
            </form>
        </div>
    );
}

export default withRouter(Login);