import React from 'react'

const AutoComplete = (props) => {
    // console.log("suggestions:", props.suggestions);
    // console.log("search:", props.search);
    return (
        <div className="autocomplete">
            {props.suggestions
                .filter(({ name }) => name.toLowerCase().indexOf(props.search.toLowerCase()) > -1)
                .map((value) => {
                    console.log('Value:', value.name);
                    return (
                        <div
                            className="autocomplete_item"
                            onClick={() => props.updateSeach(value.name)}
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