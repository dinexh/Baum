import React, { useState } from 'react';
import Login_Image from "../../Assets/loginImage.svg"
import Login_Image2 from "../../Assets/loginimage_2.svg"
import './Auth.css';

const Auth = () => {
    return (
        <div className="auth-container">
           <div className="auth-container-in">
               <div className="auth-container-in-one">
                <img src={Login_Image2} className='LoginImage' alt="" />
               </div>
               <div className="auth-container-in-two">
                     <div className="auth-form">
                        <div className="auth-form-heading">
                            <h1>Get started </h1>
                        </div>      
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Auth;
