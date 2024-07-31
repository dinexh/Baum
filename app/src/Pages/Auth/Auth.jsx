import React, { useState } from 'react';
import Plant from "../../Assets/auth/plants.jpg"
import './Auth.css';
// import '../../index.css';
import LoginImage from '../../Assets/auth/login.png'; // Adjust the path as needed
import SignupImage from '../../Assets/auth/signup.jpg'; // Adjust the path as needed
import Login2 from "../../Assets/auth/AuthImage.svg"; // Adjust the path as needed

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleBackHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="auth-container">
            <div className="auth-container-in">
                <div className="auth-container-top">
                    <button onClick={handleBackHome} className="back-home-button">Back to Home</button>
                    <button>Help</button>
                </div>
                <div className="auth-main">
                    <div className="auth-container-in-one">
                        <img src={Plant} className='AuthImage' alt="" />
                    </div>
                    <div className="auth-container-in-two">
                        <div className="auth-form">
                            <div className="auth-form-heading">
                                <h1>{isLogin ? 'Login' : 'Create an Account'}</h1>
                            </div>
                            {isLogin ? (
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" required />
                                    </div>
                                    <button type="submit">Login</button>
                                    <p>Don't have an account? <span onClick={toggleForm} className="toggle-link">Register here</span></p>
                                </form>
                            ) : (
                                <form>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input type="password" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password:</label>
                                        <input type="password" required />
                                    </div>
                                    <button type="submit">Register</button>
                                    <p>Already have an account? <span onClick={toggleForm} className="toggle-link">Login here</span></p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
                <div className="auth-container-footer">
                    <p>© 2021 KLSAC-Panchatantra. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
