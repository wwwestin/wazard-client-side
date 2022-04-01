import React, {useState, useEffect} from "react";
import TripForm from "./TripForm";

function TripPage({handleDeleteTrip}) {
    const [trips, setTrips] = useState([]);

    function handleAddTrip(newTrip) {
        setTrips([...trips, newTrip]);
    }

    function handleDeleteTrip(tripToDelete) {
        const updatedTrips = trips.filter((trip) => trip.id !== tripToDelete.id);
        setTrips(updatedTrips);
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



                 