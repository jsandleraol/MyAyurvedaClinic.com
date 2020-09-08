import React, {useState, useEffect, useRef} from 'react';
import AutoComplete from './autoComplete'
import { SearchButton } from "./materialButtons"
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { InputOptions } from '../testimonialData'



const SearchBar = ({displaySmall}) => {
    const [search, setSearch] = useState('');
    const suggestions = InputOptions;
    const wrapperRef = useRef(null);
    const [clearSearch, setClearSearch] = useState(false)
    const [displayOptions, setDisplayOptions] = useState(false)

    const updateSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value) {
            setClearSearch(true)
            setDisplayOptions(true)
        }
        else { setClearSearch(false) }
    }

    const clearInput = () => {
        setSearch('');
        setClearSearch(false)
    }

    const updateInput = search => {
        setSearch(search)
        setDisplayOptions(false)
        setClearSearch(true)
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
                    onClick={() => setDisplayOptions(!displayOptions)}
                />
                {clearSearch ?
                    <div onClick={() => clearInput()} className="clear-input">
                        <ClearIcon />
                    </div> : null}
                {displayOptions && (
                    < AutoComplete
                        suggestions={suggestions}
                        updateSeach={(search) => updateInput(search)}
                        search={search} />)}
            </div>
            <SearchButton variant="contained" disableElevation href="/results">
                <SearchIcon style={SearchIconCSS} />
            </SearchButton>
        </form>
    )
}

export default SearchBar