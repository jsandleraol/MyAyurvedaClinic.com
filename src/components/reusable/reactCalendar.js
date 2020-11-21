  
import React, {useState,useEffect, useRef} from "react";
import Calendar from "react-calendar";
import { useSelector, useDispatch } from 'react-redux';
import { getNextDay } from "./getNextDay";

import TodayIcon from '@material-ui/icons/Today';


const ReactCalendar = () => {
  const [displayOptions, setDisplayOptions] = useState(false)
  const wrapperRef = useRef(null);
  const date = useSelector(state => state.date);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
        window.removeEventListener("mousedown", handleClickOutside);
    };
});

const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplayOptions(false);
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
  
  let optionsCSS = displayOptions ? 'filter-options-selected' : 'filter-options'

  return (
      <div className={optionsCSS}>
        <TodayIcon onClick={() => setDisplayOptions(!displayOptions)} />
        {displayOptions ?
          <div className="dropdown" ref={wrapperRef}>
            <Calendar onChange={onChange} value={date.today} />
          </div> : null}
      </div>
  );
};

export default ReactCalendar;