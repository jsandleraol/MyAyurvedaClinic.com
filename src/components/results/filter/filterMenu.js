import React, { useState, useEffect, useRef } from 'react'
import Dropdown from './dropdown'


const FilterMenu = ({list}) => {
    const [displayOptions, setDisplayOptions] = useState(false)
    const wrapperRef = useRef(null);


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplayOptions(false);
        }
    };
    
    const {name, options} = list;
    let optionsCSS = displayOptions ? 'filter-options-selected' : 'filter-options'

    return (
        <div className={optionsCSS} ref={wrapperRef}>
            <div onClick={() => setDisplayOptions(!displayOptions)}>{name}</div>
            {displayOptions ? <Dropdown content={options}/> : null}
        </div>
    )
}

export default FilterMenu;