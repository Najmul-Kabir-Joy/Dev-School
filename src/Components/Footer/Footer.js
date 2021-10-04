import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-dark text-white text-center">
                All Rights Reserved &copy; Najmul Kabir Joy
                <div className='footer-links'>
                    <a href="https://www.facebook.com/najmulkabirjoy/"><i class="fab fa-facebook me-5"></i></a>
                    <a href="https://github.com/Najmul-Kabir-Joy"><i class="fab fa-github me-5"></i></a>
                    <a href="https://www.instagram.com/liliput_dinosaur/"><i class="fab fa-instagram-square me-5"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;