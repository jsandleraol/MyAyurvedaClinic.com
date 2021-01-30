import React from 'react'
import StarIcon from '@material-ui/icons/Star';

const DoctorRating = ({ rating }) => {
    return (
        <div className="rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <div className="ratingNumber">
                {rating}
            </div>
        </div>
    )
}

export default DoctorRating