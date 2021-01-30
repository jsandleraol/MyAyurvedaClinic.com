import React, { useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { SingleSlot, EmptySlot } from "../reusable/materialButtons"
import CalendarFilter from '../results/filter/calendarFilter'


const DoctorAppointments = ({ filteredDates }) => {
    const [open, setOpen] = useState(false)
    let i = 0;

    return (
        <div className="doctorAppointments-container">
            <div className="doctorAppointments">
                <div className="slotWrapper">
                    {filteredDates === null ? null :
                        open ?
                            Object.values(filteredDates).map(slot => { return Object.values(slot) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                            : Object.values(filteredDates).map(slot => { return Object.values(slot).slice(0, 3) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                    }
                </div>
                {Object.values(filteredDates).some(slot => {
                    let isEmpty = Object.values(slot).some(innerValue => innerValue)
                    let isAvailable = !Object.values(slot).every(innerValue => innerValue === '-')
                    return isEmpty === false ? isEmpty : isAvailable
                }) === false ?
                    <div className="noAppointmentWrapper">
                        <div className="showMore">
                            No Appointments Available
                                </div>
                    </div>
                    : !Object.values(filteredDates).some((slot) => slot.length > 3) ?
                        null
                        : open ?
                            <div className="showMore"
                                onClick={() => setOpen(false)}>
                                show less <ExpandLessIcon />
                            </div>
                            :
                            <div className="showMore"
                                onClick={() => setOpen(true)}>
                                show more <ExpandMoreIcon />
                            </div>
                }


                {/* ------> HIDDEN APPOINTMENT SCHEDULER <------*/}
                <div className="hiddenCalendar">
                {open && Object.values(filteredDates).some((slot) => slot) ? <CalendarFilter/> : null}
                <div className="hiddenSlotWrapper">
                    {filteredDates === null ? null :
                        open ?
                            Object.values(filteredDates).map(slot => { return Object.values(slot) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                            : Object.values(filteredDates).map(slot => { return Object.values(slot).slice(0, 0) }).map(slot =>
                                <div className="slots" key={i++}>
                                    {slot.map(slot => slot === '-' ?
                                        <EmptySlot disabled key={slot}></EmptySlot> :
                                        <SingleSlot variant="contained" key={slot}>{slot}</SingleSlot>)}
                                </div>
                            )
                    }
                </div>
                </div>
                {!Object.values(filteredDates).some((slot) => slot) ?
                    <div className="hidden-appointment-button">
                        No Appointments Available
                            </div>
                    : open ?
                        <div className="hidden-appointment-button"
                            onClick={() => setOpen(false)}>
                            show less <ExpandLessIcon />
                        </div>
                        :
                        <div className="hidden-appointment-button"
                            onClick={() => setOpen(true)}>
                            show appointments <ExpandMoreIcon />
                        </div>
                }
            </div>
        </div>
    )
}

export default DoctorAppointments;