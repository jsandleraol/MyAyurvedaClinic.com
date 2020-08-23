import React from 'react';


const TestimonialCard = React.forwardRef((user, ref) =>{
    let {name, country, review, image, id} = user.user;
    let nextID = 1;
    // console.log("nextID", nextID);
    let testimonialCardCSS = id === nextID ? ('testimonial_card_filled') : ('testimonial_card');
    nextID = id === nextID ? nextID + 4 : nextID;
    // console.log("id", id);
    return(
        <div>
            <div className={testimonialCardCSS} ref={ref}>
                <div className="image">
                    <img src={image} className="user_avatar" alt={name + '_image'}/>
                </div>
                <div className="testimonial_text">
                    <p>{'"' + review + '"'}</p>
                    <span className="testimonial_sign">{name + ', ' + country}</span>
                </div>
            </div>
        </div>
    )
})

export default TestimonialCard;