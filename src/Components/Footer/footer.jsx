import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com" target="https://github.com/akshau12a" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="https://www.linkedin.com/in/akshay-poojary-736080224/" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:example@gmail.com" target="apooj002@gmail.com" rel="noopener noreferrer">
                    <i className="far fa-envelope"></i>
                </a>
            </div>
            <p className="copy">© Akshay..</p>
        </footer>
    );
}

export default Footer;
