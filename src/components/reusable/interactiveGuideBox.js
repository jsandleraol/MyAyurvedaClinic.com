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
                    <p className="interactiveBox-text" >{text}
                    <div className="interactiveBox-wrapper">
                    <button className="interactiveBox-stop">stop</button>
                    <button className="interactiveBox-next"> next</button>
                    </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default interactiveGuideBox;