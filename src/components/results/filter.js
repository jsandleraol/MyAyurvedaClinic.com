import React from 'react'
import Calendar from './calendar'
import FilterOption from './filterOption'
import { filterData } from '../testimonialData'


const Filter = ({setFilter}) => {
    return (
        <div className="results-navbar">
            <div className="filter">
            <div className="professionals-amount">247 specialists</div>
                {filterData.map(singleList =>
                    <FilterOption
                        list={singleList}
                        key={singleList.name}
                        setFilter={(filterList) => setFilter(filterList)}
                    />
                )}
            </div>
            <Calendar />
        </div>
    )
}

export default Filter;