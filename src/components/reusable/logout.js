import React,{useRef, useEffect} from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useDispatch } from 'react-redux';


const Logout = ({ closeRef }) => {
    const dispatch = useDispatch();
    const searchContainerRef = useRef();

    const removeUserName = () => {
        dispatch({
            type: 'CLOSE_SESSION',
        })
        closeRef()
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

    return (
        <div className="sessionContainer" ref={searchContainerRef}>
            <div className="formContainer">
                <div className="login-title">Are you sure you want to log out?</div>
                <div className="bar-input-close-session">
                    <div className="button-container">
                    <div
                        onClick={() => closeRef()}
                        className="close-session-button">
                        Continue
                    </div>
                    <div
                        onClick={() => removeUserName()}
                        className="close-session-button">
                        Exit Session <ArrowForwardIcon />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout;