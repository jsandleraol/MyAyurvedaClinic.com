import React from 'react'
import Calendar from './calendar'

const Search = () =>{
return(
    <div className="search-navbar">
        <div className="professionals-amount">247</div>
        <div className="search-options">Price</div>
        <div className="search-options">Availabilty</div>
        <div className="search-options">Gender</div>
        <div className="search-options"> Languages</div>
        <Calendar/>
    </div>
)
}

export default Search;