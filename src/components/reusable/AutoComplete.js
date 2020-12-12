import React from 'react'

const AutoComplete = ({suggestions, search, updateSeach}) => {
    return (
        <div className="autocomplete">
            {search.length > 0 ? suggestions
                .filter(input => input.toLowerCase().indexOf(search.toLowerCase()) > -1)
                .map(value => {
                    return (
                        <div
                            className="autocomplete-item"
                            onClick={() => updateSeach(value)}
                            key={value}
                            tabIndex="0" >
                            <span>{value}</span>
                        </div>
                    );
                }) : null}
        </div>
    )
}

export default AutoComplete;