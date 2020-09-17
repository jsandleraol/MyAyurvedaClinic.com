import React, {useState} from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Dropdown = ({ content, setFilter }) => {
    const [filterList, setFilterList] = useState([]);

    console.log("Selection in dropdown", filterList)

    const setLocalFilter = (newFilter) => {
        let indexFilter = filterList.indexOf(newFilter);

        console.log("Local level index", indexFilter)

        indexFilter ?
        setFilterList([...new Set([...filterList, newFilter])]) :
        setFilterList(filterList => filterList.filter((filter, i) => i !== indexFilter))
    }

    return (
        <div className="dropdown">
            {content ? content.map(item =>
                <div className="dropdown-item" onClick={()=> setLocalFilter(item)} key={item}>
                    {item}{(filterList.indexOf(item) === -1) ? <RadioButtonUncheckedIcon/> : <CheckCircleIcon/>}
                    </div>)
                : <div className="dropdown-item">No content to display</div>}
                <div className="dropdown-apply" onClick={() => setFilter(filterList)}>Apply</div>
        </div>
    )
}

export default Dropdown;