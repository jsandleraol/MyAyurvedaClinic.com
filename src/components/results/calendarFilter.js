import React  from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { getNextDay } from '../reusable/getNextDay'
import { useSelector, useDispatch } from 'react-redux';


const CalendarFilter = () => {
    const date = useSelector(state => state.date);
    const dispatch = useDispatch();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    const newDate = (date, n) => {
        if (n > 0) {
            dispatch({type: 'UPDATE_DATE', 
            today: getNextDay(date, n * 3), 
            tomorrow: getNextDay(date, n * 4),
            afterTomorrow: getNextDay(date, n * 5),
        })
        } else {
            dispatch({type: 'UPDATE_DATE', 
            today: getNextDay(date, n * 3), 
            tomorrow: getNextDay(date, n * 2),
            afterTomorrow: getNextDay(date, n) })
        }
    }
    return (
        <div className="calendarFilter">
            {date.today > new Date() ?
            <NavigateBeforeIcon onClick={() => newDate(date.today, -1)} /> :
            <div className="disableBotton">
            <NavigateBeforeIcon/>
            </div>
            }
            <div className="calendar-day">
                {days[date.today.getDay()]} <br />{months[date.today.getMonth()].slice(0, 3)} {date.today.getDate()}
            </div>
            <div className="calendar-day">
                {days[date.tomorrow.getDay()]} <br />{months[date.tomorrow.getMonth()].slice(0, 3)} {date.tomorrow.getDate()}
            </div>
            <div className="calendar-day">
                {days[date.afterTomorrow.getDay()]} <br />{months[date.afterTomorrow.getMonth()].slice(0, 3)} {date.afterTomorrow.getDate()}
            </div>
            <NavigateNextIcon onClick={() => newDate(date.today, 1)} />
        </div>
    )
}

export default CalendarFilter;