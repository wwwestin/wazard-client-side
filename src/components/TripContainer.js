import React from "react";
import TripCard from "./TripCard";

function TripContainer({trips}) {
    
const cards = trips.map((t) =>(
    <TripCard key={t.id} trip = {t} />
));

    return (
        <div>
            {cards}
        </div>
    )
}

export default TripContainer;