import React from "react";

function TripCard({trip}) {

    const {user, location} = trip;

    return (
        <div>
            <div className= "card-name">
                {user}
            </div>
            <div className="location">
                {location}  
            </div>
        </div>
    )
}

export default TripCard;