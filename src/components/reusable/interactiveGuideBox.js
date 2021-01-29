import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


const InteractiveGuideBox = () => {
    let [count, setCount] = useState(0)
    let [open, setOpen] = useState(true)
    const guideData = useSelector(state => state.guideBoxData);
    const reduxCounter = useSelector(state => state.guideBoxCounter);
    const dispatch = useDispatch()

    const updateCounter = () => {
        dispatch({ 
            type: 'SET_COUNTER',
            count: count + 1,
        });
        if(count === 4) window.scrollTo({top: 0, behavior: 'smooth'})
    };

    const updateOpen = () => {
        dispatch({
            type: 'SET_STATE',
            open: false,
        })
    };

    // const onChange = date => {
    //     dispatch({
    //         type: 'UPDATE_DATE',
    //         today: getNextDay(date, 0),
    //         tomorrow: getNextDay(date, 1),
    //         afterTomorrow: getNextDay(date, 2),
    //     })
    //   };

    // const updateCounter = () => {
    //     dispatch({ type: 'SET_STATE', payload: count + 1 })
    // }

    useEffect(() => {
        if (reduxCounter.count) setCount(reduxCounter.count)
    }, [reduxCounter.count])

    useEffect(() => {
        reduxCounter.open ? setOpen(reduxCounter.open) : setOpen(reduxCounter.open)
    }, [reduxCounter.open])


    const text = guideData.length > 0 ? Object.entries(guideData[count]).map(([key, value]) => { return key === "text" ? value : null }).filter(value => value !== null) : ''
    const left = guideData.length > 0 ? Object.entries(guideData[count]).map(([key, value]) => { return key === "left" ? value : null }).filter(value => value !== null) : ''
    const top = guideData.length > 0 ? Object.entries(guideData[count]).map(([key, value]) => { return key === "top" ? value : null }).filter(value => value !== null) : ''

    const CSSBox = {
        position: 'absolute',
        top: top,
        left: left
    }
    return (
        <div>
            <div style={CSSBox}>
                {open ? <div className="interactiveBox">
                    <button
                        className="interactiveBox-close"
                        onClick={() => updateOpen()}
                    >
                        x
                </button>
                    <p className="interactiveBox-text" >{text} </p>
                    <div className="interactiveBox-wrapper">
                        {count === 0 ? <button
                            className="interactiveBox-next"
                            onClick={() => setCount(count += 1)}
                        > start
                            </button>
                            : count === (guideData.length - 1)
                                ? <button
                                    className="interactiveBox-next"
                                    onClick={() => updateOpen()}
                                >
                                    close
                                </button>
                                : count === 4
                                ? <Link to={'/results'}
                                    className="interactiveBox-next"
                                    onClick={() => updateCounter()}
                                >
                                    Go to next page
                                </Link>
                                : <button
                                    className="interactiveBox-next"
                                    onClick={() => setCount(count += 1)}
                                >
                                    next
                                </button>}
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

export default InteractiveGuideBox;