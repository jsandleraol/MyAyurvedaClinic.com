import React from 'react'

const AutoComplete = ({suggestions, search, updateSeach}) => {
    // console.log("suggestions:", props.suggestions);
    // console.log("search:", props.search);
    return (
        <div className="autocomplete">
            {suggestions
                .filter(({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1)
                .map((value) => {
                    console.log('Value:', value.name);
                    return (
                        <div
                            className="autocomplete-item"
                            onClick={() => updateSeach(value.name)}
                            key={value.name}
                            tabIndex="0"
                        >
                            <span>{value.name}</span>
                        </div>
                    );
                })}
        </div>
    )
}

export default AutoComplete;