const getAllSearchValues = (filterOptions) => {
    // useMemo
    let filteredOptionList = filterOptions.map(optionList => Object.entries(optionList).map(([category, categoryValue]) => {
        return (category === 'illness' ? categoryValue.map(illnessList => illnessList.list.map(listArray => listArray)) :
            category === 'products' ? [categoryValue.map(product => product.name)] :
                [categoryValue.map(doctor => `${doctor.name.firstName} ${doctor.name.lastName}`)])
            .reduce((prev, current) => [...prev, ...current], [])
    }).reduce((prev, current) => [...prev, ...current], []))

    if (filteredOptionList) filteredOptionList = filteredOptionList.reduce((prev, current) => [...prev, ...current], [])

    return filteredOptionList
}

export { getAllSearchValues };