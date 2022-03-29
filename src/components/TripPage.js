import React, {useState, useEffect} from 'react';
import TripContainer from "./TripContainer";

function TripPage() {

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/test")
        .then((r) => r.json())
        .then(setTrips);
      }, []);

    return (
        <div className = "cards-container">
            <div>
                <TripContainer trips = {trips} />
            </div>
        </div>
    )
}

export default TripPage;