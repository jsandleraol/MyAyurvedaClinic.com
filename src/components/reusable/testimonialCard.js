import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import ExpandText from './expandText'


const TestimonialCard = React.forwardRef((user, ref) => {
    let { name, country, review, image, id } = user.user;

    let testimonialCardCSS = (id % 4) === 0 ? ('testimonial-card-filled') : ('testimonial-card');

    return (
        <div>
            <div className={testimonialCardCSS} ref={ref}>
                <div className="testimonial-image">
                    <img src={image} className="user-avatar" alt={name + '-image'} />
                </div>
                <div className="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <div className="testimonial-text">
                        <ExpandText review={review} />
                    <span className="testimonial-sign">{name + ', ' + country}</span>
                </div>
            </div>
        </div>
    )
})

export default TestimonialCard;