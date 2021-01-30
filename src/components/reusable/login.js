import React, { useState, useRef, useEffect } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useDispatch } from 'react-redux';

const Login = ({ closeRef }) => {
    const [userName, setUserName] = useState('');
    const [error, setError] = useState(false)
    const dispatch = useDispatch();

    const searchContainerRef = useRef();

    const clearInput = () => {
        setUserName('')
    }

    const keyboardNavigation = (e) => {
        if (e.key === "Escape") setUserName('')
    }


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = searchContainerRef;
        if (wrap && !wrap.contains(event.target)) {
            closeRef();
        }
    };


    const onSubmit = (e) => {
        if(userName){
        dispatch({
            type: 'NEW_SESSION',
            name: userName,
        })
        closeRef()
    } else {
        setError(true)
    }
        e.preventDefault()
    }

    return (
        <div className="sessionContainer" ref={searchContainerRef}>
            <div className="formContainer">
                <div className="login-title">Welcome, Log in</div>
                <form
                    onSubmit={(e) => onSubmit(e)}
                >
                    <div className="bar-input-session">
                        <input className={error ? "input-error" : "input"}
                            type="text"
                            name="inputText"
                            value={userName}
                            placeholder="Enter your name to begin"
                            onChange={(e) => setUserName(e.target.value)}
                            onKeyDown={e => keyboardNavigation(e)}
                            maxLength={20}
                        // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}
                        />
                        {userName ?
                            <div
                                onClick={() => clearInput()}
                                className="clear-input">
                                <ClearIcon />
                            </div>
                            : null}
                        <div
                            className="sessionNextButton"
                            onClick={(e) => onSubmit(e)}>
                            <ArrowForwardIcon />
                        </div>
                    </div>
                </form>
                <div>{error ? 
                <div className="error-message">You cannot leave this field empty</div> : null}
                </div>
            </div>
        </div>
    )
}

export default Login;