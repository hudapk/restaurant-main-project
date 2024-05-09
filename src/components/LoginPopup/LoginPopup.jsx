import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Login");

    const toggleState = () => {
        setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
    };

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? null : <input type="text" placeholder='your name' required />}
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='your password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login" ? (
                    <p>Create a new account? <span onClick={toggleState}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={toggleState}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
