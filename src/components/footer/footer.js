import React from 'react'
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer_links_background">
                <div className="footer_links">
                    <ul>
                        <li className="footer_title">Get to know us</li>
                        <li><Link to="/about" className="footer_single_link"> About us</Link></li>
                        <li><Link to="/press" className="footer_single_link"> Press</Link></li>
                        <li><Link to="/blog" className="footer_single_link"> Blog</Link></li>
                        <li><Link to="/testimonials" className="footer_single_link"> Testimonials</Link></li>
                    </ul>
                </div>
                <div className="footer_links">
                    <ul>
                        <li className="footer_title">Ayurveda</li>
                        <li><Link to="/about" className="footer_single_link"> What is Ayurveda?</Link></li>
                        <li><Link to="/press" className="footer_single_link"> Doshas</Link></li>
                        <li><Link to="/blog" className="footer_single_link"> Gunas</Link></li>
                        <li><Link to="/testimonials" className="footer_single_link"> Cooking Recepies</Link></li>
                        <li><Link to="/testimonials" className="footer_single_link"> Panchakarma</Link></li>
                        <li><Link to="/testimonials" className="footer_single_link"> VPK Test</Link></li>
                    </ul>
                </div>
                <div className="footer_links">
                    <ul>
                        <li className="footer_title">Let us help you</li>
                        <li><Link to="/about" className="footer_single_link"> Contact us</Link></li>
                        <li><Link to="/press" className="footer_single_link"> Help</Link></li>
                        <li><Link to="/blog" className="footer_single_link"> Your account</Link></li>
                        <li><Link to="/testimonials" className="footer_single_link"> Orders & Returns</Link></li>
                    </ul>
                </div>
                <div className="footer_links">
                    <ul>    
                        <li className="footer_title">Work with us</li>
                        <li><Link to="/about" className="footer_single_link"> List your practice</Link></li>
                        <li><Link to="/blog" className="footer_single_link"> List your Products</Link></li>
                        <li><Link to="/press" className="footer_single_link"> Careers</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hr_container"><hr/></div>
            <div className="copyright">
                <span>&copy;2020 MyAyurvedaClinic, Inc.</span>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms of use</Link>
            </div>
        </div>

    )
}

export default Footer;