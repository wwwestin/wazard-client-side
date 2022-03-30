import React from "react";
import TripCard from "./TripCard";

function TripContainer({trips}) {
    
const cards = trips.map((trip) =>(
    <TripCard 
    key={trip.id} 
    trip = {trip} 
    />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;