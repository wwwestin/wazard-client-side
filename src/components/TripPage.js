import React, {useState, useEffect} from "react";
import TripContainer from "./TripContainer";
import TripForm from "./TripForm";

function TripPage() {

    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(setTrips);
      }, []);

      useEffect(() => {
        fetch("http://localhost:9292/locations")
        .then((r) => r.json())
        .then(setTrips);
      }, []);

      function handleAddTrip(newTrip) {
        setTrips([...trips, newTrip]);
    }

    function handleDelete(trip){
        const newArray = trips.filter((item) => item.id !== trip.id)
        setTrips(newArray)
    }

    return (
        <div className = "cards-container">
            <div>
                <TripForm onAddTrip = {handleAddTrip} />
                <TripContainer 
                trips = {trips} 
                removeTrip = {handleDelete} 
                />
            </div>
        </div>
    )
}

export default TripPage;