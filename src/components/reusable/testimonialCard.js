import React from 'react';


const TestimonialCard = (user) =>{
    let {name, country, review, image} = user.user;

    return(
        <div>
            <div className="testimonial_card">
                <div className="image">
                    <img src={image} className="user_avatar"/>
                </div>
                <div className="testimonial_text">
                    <p>{'"' + review + '"'}</p>
                    <span className="testimonial_sign">{name + ', ' + country}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;