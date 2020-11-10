// import React, { useMemo } from 'react'
import React from 'react'
import Filter from './filter'
import { useSelector } from 'react-redux';
import DoctorCard from './doctorCard'
// import CircularProgress from '@material-ui/core/CircularProgress';


const Results = () => {
    const filterArray = useSelector(state => state.filterSelection);
    let doctors = useSelector(state => state.doctors);
    let filteredDoctors = null;

    // check availability of doctors on the back end, before loading Redux state
    // check based on current time and day, and if it is available
    // during appointment process, check availability every 30sec,
    // retrieve new available options for that same doctor if slot was taken
    doctors = doctors.sort((a, b) => b.rating - a.rating)

    // useMemo(() => {
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
            });
    // }, [doctors, filterArray]);

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
                        <DoctorCard doctor={doctor}  key={doctor.id}/>)
                    : doctors.map(doctor =>
                        <DoctorCard doctor={doctor} key={doctor.id}/>)}
            </div>
        </div>
    )
}

export default Results;