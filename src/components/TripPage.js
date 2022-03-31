import React, {useState, useEffect} from "react";
import TripForm from "./TripForm";

function TripPage({trips, setTrips}) {

    
    function handleAddTrip(newTrip) {
        setTrips([...trips, newTrip]);
    }

    return (
        <div className = "cards-container">
            <div>
                <TripForm onAddTrip = {handleAddTrip}/>
            </div>
        </div>
    )
}

export default TripPage;



                 