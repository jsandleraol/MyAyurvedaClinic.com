import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TestimonialCard from "./testimonialCard"
import { testimonialData } from '../testimonialData'

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

    return (
        <div className="home-testimonials">
            {currentTestimonials.map((userList, index) =>
                (currentTestimonials.length === index + 1) ?
                    <TestimonialCard ref={lastTestimonialRef} user={userList} key={userList.id} />
                    : (<TestimonialCard user={userList} key={userList.id} />))}
            {loading && <CircularProgress />}
            {error && 'Error'}
            {/* {testimonialData.length & (testimonialData.map(user => <TestimonialCard user={user} key={user}/>))} */}
        </div>
    )
}


export default Home;