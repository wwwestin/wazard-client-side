import React from "react";

function TripCard({trip}) {

    const {user, location} = trip;

    return (
        <div>
            <div className= "card">
                {user}{location}
            </div>
        </div>
    )
}

export default TripCard;