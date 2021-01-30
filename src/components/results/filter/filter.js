import React from 'react'
import {useSelector} from 'react-redux';
import CalendarFilter from './calendarFilter'
import FilterMenu from './filterMenu'
import Calendar from '../../reusable/reactCalendar/reactCalendar'


const Filter = ({proAmount}) => {
    const filters = useSelector(state => state.filters);

    return (
        <div>
            <div className="empty-top-space"></div>
            <div className="navbarFilterBackground">
            <div className="navbarFilter">
                <div className="filter">
                    <div className="professionals-amount">{proAmount} specialists</div>
                    {filters.map(filterList =>
                        <FilterMenu
                            list={filterList}
                            key={filterList.name}
                        />
                    )}
                    <Calendar />
                </div>
                <div className="calendarWrapper">
                    <CalendarFilter />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Filter;