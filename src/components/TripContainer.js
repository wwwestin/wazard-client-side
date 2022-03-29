import React from "react";
import TripCard from "./TripCard";

function TripContainer({trip}) {
    
const cards = trip.map((t) =>(
    <TripCard key={t.id} trip = {t} />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;