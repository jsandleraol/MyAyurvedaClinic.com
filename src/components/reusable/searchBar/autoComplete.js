import React from 'react'

const AutoComplete = ({suggestions, search, updateSeach, cursor}) => {
    return (
        <div className="autocomplete">
            {search.length > 0 ? 
            suggestions.map((value, idx) => {
                    return (
                        <div
                            className= {cursor === idx ? "autocomplete-item-highlighted": "autocomplete-item"}
                            onClick={() => updateSeach(value)}
                            key={value}
                            tabIndex="0" >
                            <span >{value}</span>
                        </div>
                    );
                }) : null}
        </div>
    )
}

export default AutoComplete;