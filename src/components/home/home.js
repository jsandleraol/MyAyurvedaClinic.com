import React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import {ScheduleCall, SearchInput} from "../reusable/materialButtons"
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TestimonialCard from "../reusable/testimonialCard"
import {testimonialData} from '../testimonialData'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [currentPage] = useState(1)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(5)

    const indexOfLastPost = currentPage * testimonialsPerPage;
    const indexOfFirstPost = indexOfLastPost - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstPost, indexOfLastPost)


    const observer = useRef();
    const lastTestimonialRef = useCallback(node =>{
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting && hasMore){
                setTestimonialsPerPage(prevPageNumber => prevPageNumber + 1)
                console.log('Visible')
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setLoading(true);
        setError(false);
        if (testimonialData){
            setTestimonials(PrevTestimonials => {
                return[...PrevTestimonials, ...testimonialData]
            });
            setHasMore(testimonialData.length > 0);
            setLoading(false);
        } else {
            setError(true);
        }
    }, [])

    let SearchIconCSS = {
        width: '30px',
        height: '30px',
    }

    let CheckIconCSS = {
        width: '1.5vw',
        height: '1.5vw',
        minHeight: '25px',
        minWidth: '25px',
    }

    return(
    <div>
        <div className="top">
        <div className="header_container">
        <div className="header">Customized recovery plans <br/> for every health issue</div>
        <div className="search">
            <input className="search_input"
            placeholder="Health issue / Specialist's name / Product"/>
            <SearchInput variant="contained" disableElevation><SearchIcon style={SearchIconCSS}/></SearchInput>
        </div>
        </div>
        <div className="top_description"> 
            <div className="benefits">
                <li>
                    <ul><CheckIcon style={CheckIconCSS}/> Root-cause treatment of disease</ul>
                    <ul><CheckIcon style={CheckIconCSS}/> Top qualify specialists</ul>
                    <ul><CheckIcon style={CheckIconCSS}/> Transparent prices</ul>
                </li>
            </div>
            <div className="quick_call_button">
                <ScheduleCall variant="contained" >Quick Video Call</ScheduleCall>
                <span className="call_button_text">Connect now with the next available specialist</span>
                <span className="call_button_text">Prices as low as $20/15min</span>
            </div>
        </div>
        </div>
        <div className="ayurveda">
            <div className="ayur_intro_text">
                <p className="ayur_text">Ayurveda is a milleniam holistic medicine endorsed <br/>
            by the World Health Organization. It addresses the root-cause <br/>
            of illnesses which provides effective and long-lasting solutions.<br/><br/>
            Through Ayurveda, we can find answers to the most complex <br/>
            questions about life and be mental, physical and emotionally healthy.<br/>
            <Link to="/ayurveda" className="read_more">read more</Link></p>
            </div>
            <div className="ayurveda_header">
                <span className="ayurveda_header_textA">What is</span>
                <span className="ayurveda_header_textB">Ayurveda?</span>
                </div>
        </div>
        <div className="home_testimonials">
                {currentTestimonials.map((userList, index) => 
                (currentTestimonials.length === index + 1) ?
                <TestimonialCard ref={lastTestimonialRef} user={userList} key={userList.id}/>
                : (<TestimonialCard user={userList} key={userList.id}/>))}
                {loading && 'Loading...'}
                {error && 'Error'}
                {/* {testimonialData.length & (testimonialData.map(user => <TestimonialCard user={user} key={user}/>))} */}
        </div>
    </div>  
    )
}


export default Home;