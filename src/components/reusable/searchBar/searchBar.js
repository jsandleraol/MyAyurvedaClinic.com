import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';
import AutoComplete from './autoComplete';
import { SearchButton } from "../materialButtons";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { useLocation } from 'react-router-dom';
import { getCategory } from './getCategory';
import { getAllSearchValues } from '../searchBar/getAllSearchValues';

// console.log(JSON.stringify(searchOptions, null, 2))

const SearchBar = ({ displaySmall }) => {
    const [displayOptions, setDisplayOptions] = useState(false)
    const filterOptions = useSelector(state => state.searchOptions);
    const searchContainerRef = useRef();

    // const searchResultRef = useRef()
    const location = useLocation();
    const activeSearch = location.pathname.split("results/")[1]
    const [search, setSearch] = useState('');
    const [cursor, setCursor] = useState(-1);
    let allSearchValues = getAllSearchValues(filterOptions)

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

    useEffect(() => {
        if (activeSearch) updateInput(activeSearch)
    }, [activeSearch])


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = searchContainerRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplayOptions(false);
        }
    };

    // const scrollIntoView = position => {
    //     searchResultRef.current.parentNode.scrollTo({
    //         top: position,
    //         behavior: "smooth"
    //     });
    // };

    // useEffect(() => {
    //     if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
    //         return () => {};
    //     }

    //     let listItems = Array.from(searchResultRef.current.children);
    //     listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    // }, [cursor]);

    let filteredOptionList = allSearchValues ? allSearchValues.filter(searchInput => searchInput.toLowerCase().indexOf(search.toLowerCase()) > -1) : 'Error loading filter options'
    if (filteredOptionList.length === 0) filteredOptionList = allSearchValues

    let seudoSearch = filteredOptionList ? filteredOptionList.filter(searchInput => searchInput.toLowerCase().indexOf(search.toLowerCase()) > -1) : null
    if (seudoSearch.length === 0) seudoSearch = [search]

    const seudoCategory = getCategory(filteredOptionList, seudoSearch[0])
    const seudoPage = !seudoSearch || seudoCategory === 'Error' ? '/404/'
        : seudoCategory[0] === 'illness' ? '/results/' + seudoSearch[0]
            : search.length > 0 ? '/results/' + seudoSearch[0] : '/results';

    const category = getCategory(filterOptions, search)
    const page = category.length === 0 ? seudoPage : '/results/' + search



    const keyboardNavigation = (e) => {
        if (e.key === "ArrowDown") {
            setCursor(c => (c < filteredOptionList.length - 1 && displayOptions === true ? c + 1 : c))
        }
        if (e.key === "ArrowUp") {
            setCursor(c => (c > 0 ? c - 1 : 0))
        }
        if (e.key === "Escape") {
            setSearch('')
            setDisplayOptions(false)
        }
        if (e.key === "Enter" && cursor >= 0) {
            setSearch(filteredOptionList[cursor])
            setCursor(-1)
            setDisplayOptions(false)
        }
    }

    let CSSform = displaySmall ? "search-small" : "search-bar"

    let SearchIconCSS = {
        width: '30px',
        height: '30px',
    }

    return (
        <form
            className={CSSform}
            ref={searchContainerRef}
            onSubmit={(e) => e.preventDefault()}>
            <div className="bar-input">
                <input className="input"
                    type="text"
                    name="inputText"
                    value={search}
                    autoComplete="off"
                    placeholder="condition, specialist name, product.."
                    onChange={(e) => updateSearch(e)}
                    onKeyDown={e => keyboardNavigation(e)}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}
                    onClick={() => search ? setDisplayOptions(!displayOptions) : null}
                />
                {search ?
                    <div onClick={() => clearInput()} className="clear-input">
                        <ClearIcon />
                    </div> : null}
                {displayOptions && (
                    < AutoComplete
                        suggestions={filteredOptionList}
                        updateSeach={(search) => updateInput(search)}
                        search={search}
                        cursor={cursor}
                    // ref={searchContainerRef}
                    />
                )}
            </div>
            <Link to={page}>
                <SearchButton
                    variant="contained"
                    disableElevation
                >
                    <SearchIcon style={SearchIconCSS} />
                </SearchButton>
            </Link>
        </form>
    )
}

export default SearchBar