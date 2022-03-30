import React from "react";
import TripCard from "./TripCard";

function TripContainer({trips}, completelyRemove) {
    
const cards = trips.map((t) =>(
    <TripCard key={t.id} trip = {t} removeTrip={completelyRemove} />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;