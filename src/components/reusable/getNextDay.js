export const getNextDay = (date, n) => {

    // Getting required values
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    
    // Creating a new Date (with the delta)
    const finalDate = new Date(year, month, day + n)
    
    return finalDate
}