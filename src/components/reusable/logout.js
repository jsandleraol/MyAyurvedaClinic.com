import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useDispatch } from 'react-redux';


const Logout = ({ closeRef }) => {
    const dispatch = useDispatch();

    const removeUserName = () => {
        dispatch({
            type: 'CLOSE_SESSION',
        })
        closeRef()
    }

    return (
        <div className="sessionContainer">
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