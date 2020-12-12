// import React, { useMemo } from 'react'
import React from 'react'
import Filter from './filter'
import { useSelector } from 'react-redux';
import DoctorCard from './doctorCard'
import { useLocation } from '../../../node_modules/react-router-dom';
// import CircularProgress from '@material-ui/core/CircularProgress';


const Results = () => {
    const filterArray = useSelector(state => state.filterSelection);
    const illnessState = useSelector(state => state.illnesses);
    let doctors = useSelector(state => state.doctors);
    let filteredDoctors = null;

    const location = useLocation();
    const { activeSearch } = location

    const illnessCategory = activeSearch ? illnessState.map(options =>
        options.list.some(illness => illness === activeSearch) ? options.category :
            null).filter(value => value !== null) : null

    doctors = illnessCategory ? doctors.reduce((acc, doctor) =>
        [...acc, doctor.illnessCategory >= illnessCategory[0] ? doctor :
            null], []).filter(value => value !== null) : doctors


    // check availability of doctors on the back end, before loading Redux state
    // check based on current time and day, and if it is available
    // during appointment process, check availability every 30sec,
    // retrieve new available options for that same doctor if slot was taken
    doctors = doctors.length > 1 ? doctors.sort((a, b) => b.rating - a.rating) : doctors

    // useMemo(() => {
    filteredDoctors = doctors.length > 1 ?
        filterArray.some(filter => filter === 'Lowest first') && filterArray.length === 1 ?
            filteredDoctors = doctors.sort((a, b) => a.price - b.price) :
            filteredDoctors = doctors.filter((doctor) => {
                return filterArray.some((filter) => {
                    return Object.values(doctor).some((value) => {
                        if (Array.isArray(value)) return value.some((value) => value === filter);
                        if (typeof value === 'object') return Object.values(value).some((value) => value === filter);
                        return value === filter;
                    });
                });
            }) : doctors
    // }, [doctors, filterArray]);

    filteredDoctors = filteredDoctors.length === 1 ? filteredDoctors :
        filterArray.some(filter => filter === 'Lowest first') ?
            filteredDoctors.sort((a, b) => a.price - b.price) :
            filteredDoctors.sort((a, b) => b.rating - a.rating)

    return (
        <div>
            <Filter proAmount={filterArray.length > 0 ?
                filteredDoctors.length : doctors.length} />
            <div>
                {filterArray.length > 0 ?
                    filteredDoctors.map(doctor =>
                        <DoctorCard doctor={doctor} key={doctor.id} />)
                    : doctors.map(doctor =>
                        <DoctorCard doctor={doctor} key={doctor.id} />)}
                {filteredDoctors.length === 0 && filterArray.length > 0 ?
                    <div className="resultsErrorMessage">Sorry, there's no results available yet</div> : null}
            </div>
        </div>
    )
}

export default Results;