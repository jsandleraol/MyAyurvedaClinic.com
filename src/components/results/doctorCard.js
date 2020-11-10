import React from 'react'
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandText from '../reusable/expandText'

import { SingleSlot } from "../reusable/materialButtons"

const DoctorCard = ({ doctor }) => {

    const { name, address, price, rating, image, slots } = doctor;
    let { review } = doctor;
    const { street, appartment, city, state, zipcode } = address;
    const { appType, appNum } = appartment;

    const fullAddress = (appType && appNum) ?
        street + ', ' + appType + ' ' + appNum + ', ' + city + ', ' + state + ', ' + zipcode :
        street + ', ' + city + ', ' + state + ', ' + zipcode;

    return (
        <div className="doctorWrapper">
            <div className="doctorCard">
                <div className="testimonial-image">
                    <img src={image} className="user-avatar" alt={name + '-image'} />
                    <Link to={`/${name.firstName + name.lastName}`} className="read-more">View Profile</Link>
                </div>
                <div className="doctorCardDescription">
                    <div className="doctorNameRating">
                        <div className="doctorName">
                            {name.firstName + ' ' + name.lastName}</div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <div className="ratingNumber">
                                {rating}
                            </div>
                        </div>
                    </div>
                    <div className="doctorAddress">
                        {fullAddress}
                    </div>
                    <div className="doctorPrice">
                        Cost ${price / 5} per 20 min
                </div>
                    <div className="doctorReview">
                        <ExpandText review={review} />
                    </div>
                </div>
                <div className="doctorAppointments">
                    <div className="slotWrapper">
                        {/* {Object.keys(slots).map(slot => new Date(slot).toString().slice(0,10))} */}
                        {Object.values(slots).map(slot =>
                            <div className="slots">
                                {slot.map(slot =>
                                <SingleSlot variant="contained"> {slot}</SingleSlot>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="showMore">
                        show more <ExpandMoreIcon/>
                    </div>
                </div>
            </div>
            <div className="doctorSeparator"></div>
        </div>
    )
}
export default DoctorCard;