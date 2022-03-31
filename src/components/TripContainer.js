import React from "react";
import TripCard from "./TripCard";

function TripContainer({trips, removeTrip}) {
    

const cards = trips.map((trip) =>(
    <TripCard 
        key={trip.id} 
        trip = {trip} 
        removeTrip={removeTrip}
    />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;