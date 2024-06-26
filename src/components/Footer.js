import React from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/twitter.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title purple">Nxelia</h1>
                 <ul className="footer_list">
                        <li>
                            <a href="#home" className="footer_link">Home</a>
                        </li>
                        <li>
                            <a href="#technicallevels" className="footer_link">Technical Levels</a>
                        </li>
                        <li>
                            <a href="#projects" className="footer_link">Projects</a>
                        </li>
                    </ul>
                <div className="footer_social">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/noelia-fern%C3%A1ndez-l%C3%B3pez-659818215" target="_blank"><img src={navIcon1} alt="LinkedIn icon" /></a>
                    </div>
                </div>
                <span className="footer_copy purple">&#169; Nxelia. All rights reserved.</span>
            </div>
        </footer>
    )
}
