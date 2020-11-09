import React from 'react'
import {useSelector} from 'react-redux';
import Calendar from './calendar'
import FilterMenu from './filterMenu'

const Filter = ({proAmount}) => {
    const filters = useSelector(state => state.filters);
    
    return (
        <div className="navbarFilter">
            <div className="filter">
            <div className="professionals-amount">{proAmount} specialists</div>
                {filters.map(filterList =>
                    <FilterMenu
                        list={filterList}
                        key={filterList.name}
                    />
                )}
                <div className="calendarWrapper">
                <Calendar />
                </div>
            </div>
            
        </div>
    )
}

export default Filter;