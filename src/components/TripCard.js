import React from "react";

function TripCard({trip, removeTrip}) {


    const {user, location} = trip;

    return (
        <div>
            <div className= "card-name">
                {user}
            </div>
            <div className="location">
                {location}  
            </div>
            <button onClick={removeTrip(item)} id="delete"> X </button>
        </div>
    )
}

export default TripCard;