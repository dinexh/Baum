import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import Image from '../../Assets/auth/AuthIMage2.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleBackHome = () => {
        window.location.href = '/';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await axios.post('http://localhost:5001/api/login', { email, password });
                if (response.data.success) {
                    toast.success('Login successful!');
                    // Redirect or handle login success
                } else {
                    toast.error('Invalid email or password');
                }
            } else {
                if (password !== confirmPassword) {
                    toast.error('Passwords do not match');
                    return;
                }
                const response = await axios.post('http://localhost:5001/api/register', { email, password, name });
                if (response.data.success) {
                    toast.success('Registration successful!');
                    
                } else {
                    toast.error('Registration failed');
                }
            }
        } catch (error) {
            toast.error('An error occurred');
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <ToastContainer /> 
            <div className="auth-container-in">
                <div className="auth-container-top">
                    <button onClick={handleBackHome} className="back-home-button">Back to Home</button>
                    <button>Help</button>
                </div>
                <div className="auth-main">
                    <div className="auth-container-in-one">
                        <img src={Image} className='AuthImage' alt="Auth" />
                    </div>
                    <div className="auth-container-in-two">
                        <div className="auth-form">
                            <div className="auth-form-heading">
                                <h1>{isLogin ? 'Login' : 'Create an Account'}</h1>
                            </div>
                            <form onSubmit={handleSubmit}>
                                {!isLogin && (
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                    </div>
                                )}
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                {!isLogin && (
                                    <div className="form-group">
                                        <label>Confirm Password:</label>
                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                )}
                                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                                <p>{isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
                                    <span onClick={toggleForm} className="toggle-link">
                                        {isLogin ? 'Register here' : 'Login here'}
                                    </span>
                                </p>
                            </form>
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
