import '../css/modal.scss'
import '../Grid.css'
import {isMobile} from 'react-device-detect'; //isMobile to check device that is mobile
import Login from './Login'
import Register from './Register'
import { useState } from 'react';
const Modal = ({handleModalClick}) => {
    const [login, setLogin] = useState('login')

   
    function handleLogIn(){
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(0px)';
        setLogin('login');
    }
    function handleRegisterPC(){
        //device is pc
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(400px)';
        setLogin('');
    }
    function handleRegisterMobile(){
        // if device is mobile
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(0px)';
        setLogin('');
        
    }

    function handleLoginMobile(){
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(400px)';
        setTimeout(() => {
            login.style.transform = 'translateX(0px)';
            setLogin('')
        }, 1000);
    }
    

    function handleChangeRegisterToLogin(){
        var login = document.querySelector('.auth-form__container-form');
        login.style.transform = 'translateX(400px)';
        setTimeout(() => {
            login.style.transform = 'translateX(0px)';
            setLogin('login')
        }, 1000);
    }
    console.log(isMobile)
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
                                            login === 'login' ? <Login onChangeLoginToRegister={handleLoginMobile} /> : <Register onChangeRegisterToLogin={handleChangeRegisterToLogin} />
                                        }
                                    </div>
                                    <div onClick={handleModalClick} className="auth-form__container-exit">
                                            <i class="fas fa-times"></i>
                                    </div>
                                    <div className="col l-6 c-12 auth-form__left">
                                        <div className="auth-form__left-wrap">
                                            <div className="auth-form__left-heading">
                                                <h1>You Have An Account</h1>
                                            </div>
                                            <span onClick={handleLogIn} className='auth-form__right-click'>Login</span>
                                        </div>
                                    </div>
                                    <div className="col l-6 c-12 auth-form__left">
                                        <div className="auth-form__left-wrap">
                                            <div className="auth-form__left-heading">
                                                <h1>Create Accoun</h1>
                                            </div>
                                            <span  onClick={isMobile ? handleRegisterMobile : handleRegisterPC} className='auth-form__right-click'>Register</span>
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
