import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSelector, useDispatch } from 'react-redux';


const Dropdown = ({ content }) => {
    const filterSelection = useSelector(state => state.filterSelection);
    const dispatch = useDispatch();

    const setFilter = (newFilter) => {
        let indexFilter = filterSelection.indexOf(newFilter);

        indexFilter === -1 ?
        dispatch({type: 'ADD_FILTER', newFilter}) :
        dispatch({type: 'REMOVE_FILTER', indexFilter})
    }

    return (
        <div className="dropdown">
            {content ? content.map(item =>
                <div className="dropdown-item" onClick={() => setFilter(item)} key={item}>
                    {item}{(filterSelection.indexOf(item) === -1) ? <RadioButtonUncheckedIcon /> : <CheckCircleIcon />}
                </div>)
                : <div className="dropdown-item">No content to display</div>}
        </div>
    )
}

export default Dropdown;