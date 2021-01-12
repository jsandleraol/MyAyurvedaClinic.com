import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from '../../../node_modules/react-router-dom';
import { getCategory } from '../reusable/searchBar/getCategory';
import DisplayDoctors from './displayDoctors'
import DisplayProducts from './displayProducts'
// import { Search } from '@material-ui/icons';
// import CircularProgress from '@material-ui/core/CircularProgress';


const Results = () => {
    const filterOptions = useSelector(state => state.searchOptions);
    const location = useLocation();
    const activeSearch = location.pathname.split("results/")[1]

    const category = getCategory(filterOptions, activeSearch)

    return (
        <div>
            {category[0] === 'illness' || !activeSearch ?
                <DisplayDoctors activeSearch={activeSearch} />
                : category[0] === 'products' ? <DisplayProducts activeSearch={activeSearch} />
                    : <div className="resultsErrorMessage">Sorry, there are no results available for {activeSearch}</div>}
        </div>
    )
}

export default Results;