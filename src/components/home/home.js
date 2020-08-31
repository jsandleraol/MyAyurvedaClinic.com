import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ScheduleCall} from "../reusable/materialButtons"
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TestimonialCard from "../reusable/testimonialCard"
import { testimonialData } from '../testimonialData'
import SearchBar from "../reusable/searchBar"

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
    const lastTestimonialRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setTestimonialsPerPage(prevPageNumber => prevPageNumber + 1)
                // console.log('Visible', loading)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setLoading(true);
        setError(false);
        if (testimonialData) {
            setTestimonials(PrevTestimonials => {
                return [...PrevTestimonials, ...testimonialData]
            });
            setHasMore(testimonialData.length > 0);
            setLoading(false);
        } else {
            setError(true);
        }
    }, [])

    let CheckIconCSS = {
        width: '1.5vw',
        height: '1.5vw',
        minHeight: '25px',
        minWidth: '25px',
        maxHeight: '45px',
        maxWidth: '45px',
    }

    return (
        <div>
            <div className="top">
                <div className="header-container">
                    <div className="header">Customized recovery plans <br /> for every health issue</div>
                    <div className="search" >
                        <SearchBar/>
                        <div className="search-description">
                            <div className="benefits">
                                <ul>
                                    <span><CheckIcon style={CheckIconCSS} /> Root-cause treatment of disease</span>
                                    <span><CheckIcon style={CheckIconCSS} /> Top qualify specialists</span>
                                    <span><CheckIcon style={CheckIconCSS} /> Transparent prices</span>
                                </ul>
                            </div>
                            <div className="quick-call-button">
                                <ScheduleCall variant="contained" href="/search">Quick Video Call</ScheduleCall>
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
            <div className="home-testimonials">
                {currentTestimonials.map((userList, index) =>
                    (currentTestimonials.length === index + 1) ?
                        <TestimonialCard ref={lastTestimonialRef} user={userList} key={userList.id} />
                        : (<TestimonialCard user={userList} key={userList.id} />))}
                {loading && <CircularProgress />}
                {error && 'Error'}
                {/* {testimonialData.length & (testimonialData.map(user => <TestimonialCard user={user} key={user}/>))} */}
            </div>
        </div>
    )
}


export default Home;