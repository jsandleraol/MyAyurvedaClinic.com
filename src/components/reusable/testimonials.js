import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import {useSelector} from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import TestimonialCard from "./testimonialCard"



const Testimonials = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [currentPage] = useState(1)
    const [testimonialsPerPage, setTestimonialsPerPage] = useState(5)

    const testimonialData = useSelector(state => state.testimonials);

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
    }, [testimonialData])

    return (
        <div className="home-testimonials">
            {currentTestimonials.map((userList, index) =>
                (currentTestimonials.length === index + 1) ?
                    <TestimonialCard ref={lastTestimonialRef} user={userList} key={userList.id} />
                    : (<TestimonialCard user={userList} key={userList.id} />))}
            {loading && <CircularProgress />}
            {error && 'Error'}
        </div>
    )
}


export default Testimonials;