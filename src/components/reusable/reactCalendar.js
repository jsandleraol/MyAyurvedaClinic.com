  
import React, {useState,useEffect, useRef} from "react";
import Calendar from "react-calendar";
import { useSelector, useDispatch } from 'react-redux';
import { getNextDay } from "./getNextDay";

import TodayIcon from '@material-ui/icons/Today';


const ReactCalendar = () => {
  const [displayCalendar, setDisplayCalendar] = useState(false)
  const ref = useRef(null);
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
        window.removeEventListener("mousedown", handleClickOutside);
    };
});

const handleClickOutside = event => {
    const { current: wrap } = ref;
    if (wrap && !wrap.contains(event.target)) {
      setDisplayCalendar(false)
    }
};

  const onChange = date => {
    dispatch({
        type: 'UPDATE_DATE',
        today: getNextDay(date, 0),
        tomorrow: getNextDay(date, 1),
        afterTomorrow: getNextDay(date, 2),
    })
  };
  
  let optionsCSS = displayCalendar ? 'filter-options-selected' : 'filter-options'

  return (
      <div className={optionsCSS}>
        <div className="iconWrapper" onClick={() => setDisplayCalendar(!displayCalendar)}>
        <TodayIcon/>
        </div>
        {displayCalendar ?
          <div className="dropdown" >
            <Calendar onChange={onChange} value={date.today} minDate={new Date()} inputRef={ref}/>
          </div> : null}
      </div>
  );
};

export default ReactCalendar;