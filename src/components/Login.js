import React from 'react'
import '../css/login.scss'
const Login = () => {
    return (
        <>
            <div className="login">
                <div className="login__content">
                    <div className="login__heading">
                        <h1>Log in</h1>
                    </div>

                    <div className="login__userName">
                        <input name="userLogin" type="text" placeholder="Username or Email Address *" />
                    </div>

                    <div className="login__password">
                        <input name="passwordLogin" type="password" placeholder="Password" />
                    </div>

                    <div className="login__remmember">
                        <input name="remmember" type="checkbox" placeholder=""/>
                        <span>Remmember me</span>
                    </div>
                    

                    <button className="login__btn-login">LOG IN</button>

                    <div className="login__forgot-password">
                        <span>Lost Your Password?</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
