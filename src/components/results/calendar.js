import React from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Calendar = () => {
    return (
        <div className="calendar">
            <NavigateBeforeIcon />
            <div className="calendar-day">Wed <br /> May 27</div>
            <div className="calendar-day">Thu <br /> May 28</div>
            <div className="calendar-day">Fri <br /> May 29</div>
            <NavigateNextIcon />
        </div>
    )
}

export default Calendar;