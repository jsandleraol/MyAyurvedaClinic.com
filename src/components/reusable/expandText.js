import React, { useState } from 'react';

const ExpandText = ({ review }) => {
    const [expandText, setExpandText] = useState(false);

    const fullReview = review;
    review = review.length > 245 ? review.substring(0, 245) : review;

    return (
        <div>
            {review.length < 245 ?
                <p>"{fullReview}"</p> : expandText ?
                    <div className="testimonial-text-expanded">
                        <p>"{fullReview}"
                <button className="read-more"
                                onClick={() => setExpandText(false)}>
                                read less
                </button>
                        </p>
                    </div> : <p>"{review}
                        <button className="read-more"
                            onClick={() => setExpandText(true)}>
                            ...read more
                    </button>"
                </p>}

        </div>
    )
}

export default ExpandText;