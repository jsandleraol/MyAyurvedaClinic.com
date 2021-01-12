import React from 'react';
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import { ScheduleCall } from "../reusable/materialButtons"
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import SearchBar from "../reusable/searchBar/searchBar"
import Testimonials from "../reusable/testimonials"

const Home = () => {

    return (
        <div>
            <div className="top">
                <div className="header-container">
                    <div className="header">Tailored solutions <br /> for every health issue</div>
                    <div className="search" >
                        <SearchBar />
                        <div className="search-description">
                            <div className="benefits">
                                <ul>
                                    <span><CheckIcon /> Root-cause treatment of disease</span>
                                    <span><CheckIcon /> Top qualify specialists</span>
                                    <span><CheckIcon /> Transparent prices</span>
                                </ul>
                            </div>
                            <div className="quick-call-button">
                                <ScheduleCall variant="contained" href="/results">Quick Video Call</ScheduleCall>
                                <span className="quick-call-text">Connect now with the next available specialist</span>
                                <span className="quick-call-text">Prices as low as $20/15min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ayurveda">
                <div className="ayur-intro-text">
                    <p className="ayur-text">Ayurveda is a milleniam holistic medicine endorsed <br />
            by the World Health Organization. It addresses the root-cause <br />
            of illnesses which provides effective and long-lasting solutions.<br /><br />
            Through Ayurveda, we can find answers to the most complex <br />
            questions about life and be mental, physical and emotionally healthy.<br />
                    <Link to="/ayurveda" className="read-more">read more</Link></p>
                </div>
                <div className="ayurveda-header">
                    <span className="ayurveda-header-textA">What is</span>
                    <span className="ayurveda-header-textB">Ayurveda?</span>
                </div>
            </div>
            <Testimonials />
        </div>
    )
}


export default Home;