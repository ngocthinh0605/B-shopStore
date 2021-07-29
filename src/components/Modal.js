import '../css/modal.scss'
import '../Grid.css'
import Login from './Login'
import Register from './Register'
import { useState } from 'react';
const Modal = ({handleModalClick}) => {
    const [login, setLogin] = useState('login')

    function handleLogin(){
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(400px)';
        setLogin('')

        // var loginCursor = document.querySelector('.auth-form__left span');

        // loginCursor.style.cursor = 'default';
    }
    function handleLogout(){
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(0px)';
        setLogin('login')


        // var loginCursor = document.querySelector('.auth-form__right span');
        // loginCursor.style.cursor = 'default';

    }
    return (
        <>
            <div className="modal">
                <div className="modal__overlay"></div>
                <div className="modal__body grid wide">
                    <div className="row no-gutters">
                        <div className="col l-2">
                        </div>
                        <div className="modal__inner col l-8">
                            {/* Authen form */}
                            <div className="auth-form">
                                
                                <div className="auth-form__container row no-gutters ">
                                    <div className="col l-6 auth-form__container-form ">
                                        {
                                            login === 'login' ? <Login /> : <Register/>
                                        }
                                    </div>
                                    <div onClick={handleModalClick} className="auth-form__container-exit">
                                            <i class="fas fa-times"></i>
                                    </div>
                                    <div className="col l-6 auth-form__left">
                                        <div className="auth-form__left-wrap">
                                            <div className="auth-form__left-heading">
                                                <h1>Create Account</h1>
                                            </div>
                                            <span onClick={handleLogout} className='auth-form__right-click'>Register</span>
                                        </div>
                                    </div>
                                    <div className="col l-6 auth-form__left">
                                        <div className="auth-form__left-wrap">
                                            <div className="auth-form__left-heading">
                                                <h1>You Have An Account</h1>
                                            </div>
                                            <span onClick={handleLogin} className='auth-form__right-click'>Login</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-2">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Modal
