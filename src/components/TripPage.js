import React, {useState, useEffect} from "react";
import TripContainer from "./TripContainer";
import TripForm from "./TripForm";

function TripPage() {

    const [trips, setTrips] = useState([]);

    function handleAddTrip(newTrip) {
        setTrips([...trips, newTrip]);
    }

    useEffect(() => {
        fetch("http://localhost:8000/test")
        .then((r) => r.json())
        .then(setTrips);
      }, []);

    return (
        <div className = "cards-container">
            <div>
                <TripForm onAddTrip = {handleAddTrip} />
                <TripContainer trips = {trips} />
            </div>
        </div>
    )
}

export default TripPage;