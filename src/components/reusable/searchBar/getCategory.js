
const getCategory = (searchOptions, search) => {
    // useMemo
    if (search && searchOptions) {
        return searchOptions.map(optionList => Object.entries(optionList).map(([category, categoryValue]) => {
            return category === 'illness' && categoryValue.some(illnessList => illnessList.list.some(listArray => listArray.toLowerCase() === search.toLowerCase())) ? category :
                category === 'products' && categoryValue.some(product => product.name.toLowerCase() === search.toLowerCase()) ? category : null
        })).reduce((prev, current) => [...prev, ...current], []).filter(value => value !== null)
    } else {return ''}
}

export { getCategory };