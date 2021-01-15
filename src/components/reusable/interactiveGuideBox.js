import { render } from '@testing-library/react';
import React from 'react';

const interactiveGuideBox = ({text, top, left}) => {

    const CSSBox = {
        position: 'absolute',
        top: top,
        left: left
    }
    return (
        <div>
            <div style={CSSBox}>
                <div className="interactiveBox">
                    <p className="interactiveBox-text" >{text}</p>
                </div>
            </div>
        </div>
    )
}

export default interactiveGuideBox;