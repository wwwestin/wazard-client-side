import React from "react";
import TripCard from "./TripCard";

function TripContainer({trips}, completelyRemove) {
    

const cards = trips.map((trip) =>(
    <TripCard 
    key={trip.id} 
    trip = {trip} 
    removeTrip={completelyRemove}
    />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;