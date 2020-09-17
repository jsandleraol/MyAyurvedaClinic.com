import React , {useState} from 'react'
import Filter from './filter'

const Results = () => {
    const [filterList, setFilterList] = useState([])

    const setGlobalFilter = (newFilter) => {
        let indexFilter = filterList.indexOf(newFilter);

        console.log("Top level index", indexFilter)

        indexFilter ?
        setFilterList([...new Set(filterList.concat(newFilter))]) :
        setFilterList(filterList => filterList.filter((filter, i) => i !== indexFilter))
    }

    console.log("TopFilterSelection:", filterList)
    return (
        <div>
            <Filter setFilter={(filterList) => setGlobalFilter(filterList)}/>
        </div>
    )
}

export default Results;