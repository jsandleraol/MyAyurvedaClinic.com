import React from 'react'
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-links-background">
                <div className="footer-links">
                    <ul>
                        <li className="footer-title">Get to know us</li>
                        <li><Link to="/about" className="footer-single-link"> About us</Link></li>
                        <li><Link to="/press" className="footer-single-link"> Press</Link></li>
                        <li><Link to="/blog" className="footer-single-link"> Blog</Link></li>
                        <li><Link to="/testimonials" className="footer-single-link"> Testimonials</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li className="footer-title">Ayurveda</li>
                        <li><Link to="/about" className="footer-single-link"> What is Ayurveda?</Link></li>
                        <li><Link to="/press" className="footer-single-link"> Doshas</Link></li>
                        <li><Link to="/blog" className="footer-single-link"> Gunas</Link></li>
                        <li><Link to="/testimonials" className="footer-single-link"> Cooking Recepies</Link></li>
                        <li><Link to="/testimonials" className="footer-single-link"> Panchakarma</Link></li>
                        <li><Link to="/testimonials" className="footer-single-link"> VPK Test</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>
                        <li className="footer-title">Let us help you</li>
                        <li><Link to="/about" className="footer-single-link"> Contact us</Link></li>
                        <li><Link to="/press" className="footer-single-link"> Help</Link></li>
                        <li><Link to="/blog" className="footer-single-link"> Your account</Link></li>
                        <li><Link to="/testimonials" className="footer-single-link"> Orders & Returns</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <ul>    
                        <li className="footer-title">Work with us</li>
                        <li><Link to="/about" className="footer-single-link"> List your practice</Link></li>
                        <li><Link to="/blog" className="footer-single-link"> List your Products</Link></li>
                        <li><Link to="/press" className="footer-single-link"> Careers</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hr-container"><hr/></div>
            <div className="copyright">
                <span>&copy;2020 MyAyurvedaClinic, Inc.</span>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms of use</Link>
            </div>
        </div>

    )
}

export default Footer;