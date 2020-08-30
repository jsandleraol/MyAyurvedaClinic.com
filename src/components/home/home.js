import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ScheduleCall, SearchButton } from "../reusable/materialButtons"
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import TestimonialCard from "../reusable/testimonialCard"
import { testimonialData, InputOptions } from '../testimonialData'
import AutoComplete from '../reusable/AutoComplete'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [currentPage] = useState(1)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(5)
    const [search, setSearch] = useState('');
    const [clearSearch, setClearSearch] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(false)
    const suggestions = InputOptions;
    const wrapperRef = useRef(null);

    console.log("suggestions", suggestions);


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
        if(search) setClearSearch(true)
    }, [])

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplayOptions(false);
        }
    };

    let SearchIconCSS = {
        width: '30px',
        height: '30px',
    }

    let CheckIconCSS = {
        width: '1.5vw',
        height: '1.5vw',
        minHeight: '25px',
        minWidth: '25px',
        maxHeight: '45px',
        maxWidth: '45px',
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value) {
            setClearSearch(true)
            setDisplayOptions(true)
        }
        else { setClearSearch(false) }
    }

    const clearInput = () => {
        setSearch('');
        setClearSearch(false)
    }

    const updateInput = search => {
        setSearch(search)
        setDisplayOptions(false)
        setClearSearch(true)
    }

    return (
        <div>
            <div className="top">
                <div className="header_container">
                    <div className="header">Customized recovery plans <br /> for every health issue</div>
                    <div className="search" ref={wrapperRef}>
                        <form className="search_bar">
                                <div className="bar_input">
                                    <input className="input"
                                        type="text"
                                        name="inputText"
                                        value={search}
                                        autoComplete="off"
                                        placeholder="condition, specialist name, product.."
                                        onChange={(e) => updateSearch(e)}
                                        onClick={() => setDisplayOptions(!displayOptions)}
                                    />
                                    {clearSearch ?
                                        <div onClick={() => clearInput()} className="clear_input">
                                            <ClearIcon />
                                        </div> : null}
                                    {displayOptions && (
                                    < AutoComplete
                                        suggestions={suggestions}
                                        updateSeach={updateInput}
                                        search={search} />)}
                                </div>
                                
                            <SearchButton variant="contained" disableElevation>
                                <SearchIcon style={SearchIconCSS} />
                            </SearchButton>
                        </form>
                        <div className="search_description">
                            <div className="benefits">
                                <ul>
                                    <span><CheckIcon style={CheckIconCSS} /> Root-cause treatment of disease</span>
                                    <span><CheckIcon style={CheckIconCSS} /> Top qualify specialists</span>
                                    <span><CheckIcon style={CheckIconCSS} /> Transparent prices</span>
                                </ul>
                            </div>
                            <div className="quick_call_button">
                                <ScheduleCall variant="contained" >Quick Video Call</ScheduleCall>
                                <span className="quick_call_text">Connect now with the next available specialist</span>
                                <span className="quick_call_text">Prices as low as $20/15min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ayurveda">
                <div className="ayur_intro_text">
                    <p className="ayur_text">Ayurveda is a milleniam holistic medicine endorsed <br />
            by the World Health Organization. It addresses the root-cause <br />
            of illnesses which provides effective and long-lasting solutions.<br /><br />
            Through Ayurveda, we can find answers to the most complex <br />
            questions about life and be mental, physical and emotionally healthy.<br />
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