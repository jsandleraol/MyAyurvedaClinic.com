import React, {useState} from 'react'
import Calendar from './calendar'
import Dropdown from '../reusable/dropdown'

const Filter = () => {
    const [dropdownOpen, setDropdrownOpen] = useState(false)
    return (
        <div className="search-navbar">
            <div className="professionals-amount">247</div>
            <div className="search-options" onClick={() => setDropdrownOpen(!dropdownOpen)}>
                Price
                {dropdownOpen ? <Dropdown />}
                </div>
            <div className="search-options">Availabilty</div>
            <div className="search-options">Gender</div>
            <div className="search-options"> Languages</div>
            <Calendar />
        </div>
    )
}

export default Filter;