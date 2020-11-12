import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandText from '../reusable/expandText'

import { SingleSlot } from "../reusable/materialButtons"

const DoctorCard = ({ doctor }) => {
    const [open, setOpen] = useState(false)
    const date = useSelector(state => state.date);

     console.log(date.today.toISOString().slice(0,10))
     
    const { name, address, price, rating, image, slots, review } = doctor;
    const [showSlots, setShowSlots] = useState(Object.values(slots).map(slot => slot.slice(0,3)))

    const { street, appartment, city, state, zipcode } = address;
    const { appType, appNum } = appartment;

    const fullAddress = (appType && appNum) ?
        street + ', ' + appType + ' ' + appNum + ', ' + city + ', ' + state + ', ' + zipcode :
        street + ', ' + city + ', ' + state + ', ' + zipcode;

const fullSlots = () => {
    setShowSlots(slots)
    setOpen(true)
}

const partialSlots = () => {
    setShowSlots(Object.values(slots).map(slot => slot.slice(0,3)))
    setOpen(false)
}

let i = 1;

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
                        {Object.values(showSlots).map(slot =>
                            <div className="slots" key={i++}>
                                {slot.map(slot =>
                                    <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>
                                )}
                            </div>
                        )}
                    </div>
                    {open ?
                        <div className="showMore"
                            onClick={() => partialSlots()}
                        >
                            show less <ExpandLessIcon />
                        </div> :
                        <div className="showMore"
                            onClick={() => fullSlots()}
                        >
                            show more <ExpandMoreIcon />
                        </div>
                    }
                </div>
            </div>
            <div className="doctorSeparator"></div>
        </div>
    )
}
export default DoctorCard;