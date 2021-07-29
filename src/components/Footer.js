import React from 'react'
import '../css/footer.css'
import '../Grid.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="grid">
                <div className="grid wide">
                    <div className="footer__content">
                        <div className="footer__left">
                            <div className="footer__logo">
                                B-SPORT
                            </div>
                            <div className="footer__date">
                                @2021
                            </div>
                        </div>
                        <div className="footer__right">
                            <i class="footer__link fab fa-facebook"></i>
                            <i class="footer__link fab fa-instagram-square"></i>
                            <i class="footer__link fab fa-youtube"></i>
                            <i class="footer__link fab fa-tiktok"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
