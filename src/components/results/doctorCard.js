import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandText from '../reusable/expandText'
import { SingleSlot, EmptySlot } from "../reusable/materialButtons"


const DoctorCard = ({ doctor }) => {
    const [open, setOpen] = useState(false)
    const date = useSelector(state => state.date)
    const { name, address, price, rating, image, slots, review } = doctor;
    const { street, appartment, city, state, zipcode } = address;
    const { appType, appNum } = appartment;

    const fullAddress = (appType && appNum) ?
        street + ', ' + appType + ' ' + appNum + ', ' + city + ', ' + state + ', ' + zipcode :
        street + ', ' + city + ', ' + state + ', ' + zipcode;

    let i = 0;

    const currentDate = new Date()
    const day = currentDate.toLocaleDateString()
    const currentHour = currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes())

    let datesArray = [Object.values(date).map(date => date.toLocaleDateString())]
    console.log("datesArray", datesArray)

    let filteredDates = Object.entries(slots)
    .slice(0, 6)
    .map(
        ([slot, value]) => {
            let result = datesArray.some(dates => {
                return dates.some(filter => slot === filter)
            })
            let currentDay = !result ? null : slot !== day ? null : value.filter(time => time >= currentHour).length > 0 ? value.filter(time => time >= currentHour) : "-"
            result = currentDay ? currentDay : !result ? null : value ? value : '-'
            return result
        }).filter(value => value !== null)

    console.log("FILTEREDDATES",filteredDates)

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
                        {open ?
                            Object.values(filteredDates).map(slot => { return Object.values(slot) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                            :
                            Object.values(filteredDates).map(slot => { return Object.values(slot).slice(0, 3) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                        }
                    </div>
                    {Object.values(filteredDates).some(slot => {
                        return Object.values(slot) !== '-'}) === false ?
                        <div className="noAppointmentWrapper">
                            <div className="showMore">
                                No Appointments Available
                    </div>
                        </div>
                        :
                        !Object.values(filteredDates).some((slot) => slot.length > 3) ?
                            null
                            : open ?
                                <div className="showMore"
                                    onClick={() => setOpen(false)}
                                >
                                    show less <ExpandLessIcon />
                                </div>
                                :
                                <div className="showMore"
                                    onClick={() => setOpen(true)}
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