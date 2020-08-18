import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
// import Button from '@material-ui/core/Button';
import {ScheduleCall, SearchInput} from "../reusable/materialButtons"


const Home = () => {
    let SearchIconCSS = {
        width: '2vw',
        height: '2vw',
    }

    let CheckIconCSS = {
        width: '1.5vw',
        height: '1.5vw',
    }
    return(
    <div>
        <div className="top">
        <div className="header">Customized recovery plans <br/> for every health issue</div>
        <div className="search">
            <input className="search_input"
            placeholder="Health issue / Specialist's name"/>
            <SearchInput variant="contained" disableElevation><SearchIcon style={SearchIconCSS}/></SearchInput>
        </div>
        </div>
        <div className="top_description"> 
            <div className="benefits">
                <la className="la_css">
                    <ul><CheckIcon style={CheckIconCSS}/> Root-cause treatment of disease</ul>
                    <ul><CheckIcon style={CheckIconCSS}/> Top qualify specialists</ul>
                    <ul><CheckIcon style={CheckIconCSS}/> Transparent prices</ul>
                </la>
            </div>
            <div className="quick_call_button">
                <ScheduleCall variant="contained" >Quick Video Call</ScheduleCall>
                <spam className="call_button_text">Connect now with the next available specialist</spam>
                <spam className="call_button_text">Prices as low as $20/15min</spam>
            </div>
        </div>
        <div className="ayurveda_intro">
            <div className="ayur_intro_text">
                <p className="ayur_text">Ayurveda is a milleniam holistic medicine endorsed <br/>
            by the World Health Organization. It addresses the root-cause <br/>
            of illnesses which provides effective and long-lasting solutions.<br/><br/>
            Through Ayurveda, we can find answers to the most complex <br/>
            questions about life and be mental, physical and emotionally healthy.<br/>
            <Link to="/ayurveda">read more</Link></p>
            </div>
            <div className="ayurveda_header">
                <spam className="ayurveda_header_textA">What is</spam>
                <spam className="ayurveda_header_textB">Ayurveda?</spam>
                </div>
        </div>
    </div>
    )
}


export default Home;