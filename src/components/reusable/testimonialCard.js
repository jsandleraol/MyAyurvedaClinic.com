import React from 'react';
import StarIcon from '@material-ui/icons/Star';


const TestimonialCard = React.forwardRef((user, ref) =>{
    let {name, country, review, image, id} = user.user;
    let nextID = 1;
    // console.log("nextID", nextID);
    let testimonialCardCSS = id === nextID ? ('testimonial-card-filled') : ('testimonial-card');
    nextID = id === nextID ? nextID + 4 : nextID;
    // console.log("id", id);
    return(
        <div>
            <div className={testimonialCardCSS} ref={ref}>
                <div className="testimonial-image">
                    <img src={image} className="user-avatar" alt={name + '-image'}/>
                </div>
                <div className="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    </div>
                
                <div className="testimonial-text">
                    <p>{'"' + review + '"'}</p>
                    <span className="testimonial-sign">{name + ', ' + country}</span>
                </div>
            </div>
        </div>
    )
})

export default TestimonialCard;