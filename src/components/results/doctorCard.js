import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import ExpandText from '../reusable/expandText'
import DoctorAppointments from './doctorAppointments'
import DoctorRating from './doctorRating'


const DoctorCard = ({ doctor }) => {
    const date = useSelector(state => state.date)
    const { name, address, price, rating, image, slots, review } = doctor;
    const { street, appartment, city, state, zipcode } = address;
    const { appType, appNum } = appartment;

    const fullAddress = (appType && appNum) ?
        street + ', ' + appType + ' ' + appNum + ', ' + city + ', ' + state + ', ' + zipcode :
        street + ', ' + city + ', ' + state + ', ' + zipcode;

    const currentDate = new Date()
    const today = currentDate.toLocaleDateString()
    const currentHour = currentDate.getHours() + ":" + (currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes())

    let datesArray = [Object.values(date).map(date => date.toLocaleDateString())]

    // if triggered, fetch more appointments from database
    // let fetchNewDates = Object.keys(slots).some(date => new Date(datesArray[0].[2]) < new Date(date))

    let filteredDates = Object.entries(slots).map(([date, slot]) => {
        let result = datesArray.some(dates => {
            return dates.some(filterDate => date === filterDate)
        })
        let currentDay = !result ? null
            : date !== today ? null
                : slot === null ? null
                    : slot.filter(time => time >= currentHour).length > 0 ? slot.filter(time => time >= currentHour)
                        : "-"

        result = currentDay ? currentDay : !result ? null : slot !== null ? slot : '-'
        return result
    }).filter(value => value !== null)

    return (
        <div className="doctorWrapper">
            <div className="doctorCard-container">
                <div className="doctorCard">
                    <div className="testimonial-image">
                        <img src={image} className="user-avatar" alt={name + '-image'} />
                        <Link to={`/${name.firstName + name.lastName}`} className="read-more">View Profile</Link>
                    </div>
                    <div className="doctorCardDescription">
                        <div className="doctorNameRating">
                            <div className="doctorName">
                                {name.firstName + ' ' + name.lastName}</div>
                            <DoctorRating rating={rating}/>
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
                </div>
                <DoctorAppointments filteredDates={filteredDates}/>
            </div>
            <div className="doctorSeparator"></div>
        </div>
    )
}
export default DoctorCard;