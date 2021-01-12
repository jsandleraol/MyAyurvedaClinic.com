// import React, { useMemo } from 'react'
import React from 'react'
import Filter from './filter/filter'
import { useSelector } from 'react-redux';
import DoctorCard from './doctorCard'
// import { Search } from '@material-ui/icons';
// import CircularProgress from '@material-ui/core/CircularProgress';


const DisplayDoctors = ({ activeSearch }) => {
    const filterArray = useSelector(state => state.filterSelection);
    const illnessState = useSelector(state => state.illnesses);
    let doctors = useSelector(state => state.doctors);
    let filteredDoctors = null;

    const getIllnessCategory = activeSearch ? illnessState.map(options =>
        options.list.some(illness => illness.toLowerCase() === activeSearch.toLowerCase()) ? options.category :
            null).filter(value => value !== null) : null

    doctors = !activeSearch ? doctors : getIllnessCategory.length > 0 ? doctors.reduce((acc, doctor) =>
        [...acc, doctor.illnessCategory >= getIllnessCategory[0] ? doctor : null], []).filter(value => value !== null)
        : doctors.reduce((acc, doctor) =>
            [...acc, (doctor.name.firstName + ' ' + doctor.name.lastName).toLowerCase() === activeSearch.toLowerCase() ? doctor : null], []).filter(value => value !== null)

    // check availability of doctors on the back end, before loading Redux state
    // check based on current time and day, and if it is available
    // during appointment process, check availability every 30sec,
    // retrieve new available options for that same doctor if slot was taken
    doctors = doctors.length > 1 ? doctors.sort((a, b) => b.rating - a.rating) : doctors

    // useMemo()
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

    filteredDoctors = filteredDoctors.length === 1 ? filteredDoctors :
        filterArray.some(filter => filter === 'Lowest first') ?
            filteredDoctors.sort((a, b) => a.price - b.price) :
            filteredDoctors.sort((a, b) => b.rating - a.rating)

    return (
        <div>
            <Filter proAmount={filterArray.length > 0 ?
                filteredDoctors.length : doctors.length} />
            <div>
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
        </div>
    )
}

export default DisplayDoctors;