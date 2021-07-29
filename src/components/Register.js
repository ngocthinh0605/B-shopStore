import React from 'react'
import '../css/login.scss'

const Register = () => {
    return (
        <>
            <div className="login">
                <div className="login__content">
                    <div className="login__heading">
                        <h1>Sign Up</h1>
                    </div>

                    <div className="login__userName">
                        <input name="userRegister" type="text" placeholder="Email Address *" />
                    </div>

                    <div className="login__password">
                        <input name="passwordRegister" type="password" placeholder="Password" />
                    </div>

                    <div className="login__password">
                        <input name="enterPasswordRegister"  type="password" placeholder="Enter the password" />
                    </div>

                    <div className="login__remmember">
                        <span>Your personal data will be used to support your experience</span>
                    </div>
                    <button className="login__btn-login">REGISTER</button>

                    <div className="login__forgot-password">
                        <span>Lost Your Password?</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register
