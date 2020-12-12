import React, { useState, useEffect, useRef } from 'react';
import { Link } from "../../../node_modules/react-router-dom";
import { useSelector } from 'react-redux';
import AutoComplete from './autoComplete';
import { SearchButton } from "./materialButtons";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useLocation } from '../../../node_modules/react-router-dom';

const SearchBar = ({ displaySmall }) => {

    const searchOptions = useSelector(state => state.searchOptions);
    const wrapperRef = useRef(null);
    const [displayOptions, setDisplayOptions] = useState(false)

    const location = useLocation();
    const { activeSearch } = location
    const [search, setSearch] = useState(activeSearch ? activeSearch : '');

    // console.log(JSON.stringify(searchOptions, null, 2))

    let searchList = searchOptions.map(optionList => Object.entries(optionList).map(([category, categoryValue]) => {
        return (category === 'illness' ? categoryValue.map(illnessList => illnessList.list.map(listArray => listArray)) :
            category === 'products' ? [categoryValue.map(product => product.name)] :
                [categoryValue.map(doctor => `${doctor.name.firstName} ${doctor.name.lastName}`)])
            .reduce((prev, current) => [...prev, ...current], [])
    }).reduce((prev, current) => [...prev, ...current], []))
    searchList = searchList.reduce((prev, current) => [...prev, ...current], [])


    const updateSearch = (e) => {
        setSearch(e.target.value);
        e.target.value ? setDisplayOptions(true) : setDisplayOptions(false)
    }

    const clearInput = () => {
        setSearch('')
        setDisplayOptions(false)
    }

    const updateInput = search => {
        setSearch(search)
        setDisplayOptions(false)
    }

    let SearchIconCSS = {
        width: '30px',
        height: '30px',
    }

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


    const category = searchOptions.map(optionList => Object.entries(optionList).map(([category, categoryValue]) => {
        return category === 'illness' && categoryValue.some(illnessList => illnessList.list.some(listArray => listArray === search)) ? category :
            category === 'products' && categoryValue.some(product => product.name === search) ? category : null
    })).reduce((prev, current) => [...prev, ...current], []).filter(value => value !== null)

    const page = category.some(value => value === 'products') ? '/products' : '/results'


    let CSSform = displaySmall ? "search-small" : "search-bar"

    return (
        <form className={CSSform} ref={wrapperRef}>
            <div className="bar-input">
                <input className="input"
                    type="text"
                    name="inputText"
                    value={search}
                    autoComplete="off"
                    placeholder="condition, specialist name, product.."
                    onChange={(e) => updateSearch(e)}
                    onClick={() => search ? setDisplayOptions(!displayOptions) : null}
                />
                {search ?
                    <div onClick={() => clearInput()} className="clear-input">
                        <ClearIcon />
                    </div> : null}
                {displayOptions && (
                    < AutoComplete
                        suggestions={searchList}
                        updateSeach={(search) => updateInput(search)}
                        search={search} />
                )}
            </div>
            <Link to={{ pathname: page, activeSearch: search }}>
                <SearchButton
                    variant="contained"
                    disableElevation
                // href="/results"
                >
                    <SearchIcon style={SearchIconCSS} />
                </SearchButton>
            </Link>
        </form>
    )
}

export default SearchBar