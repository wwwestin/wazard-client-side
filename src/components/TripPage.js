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


    function handleDelete(trip){
        const newArray = trips.filter(item => item !== trip)
        setTrips(newArray)
    }
      
    function completelyRemove(item){
        fetch('http://localhost:8000/test/${item.id}',{
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => console.log("Trip Deleted"))  
            
            handleDelete(item)
            const newTripsArray = trips.filter(currentItem => currentItem !== item)
            setTrips(newTripsArray)
    }

    return (
        <div className = "cards-container">
            <div>
                <TripForm onAddTrip = {handleAddTrip} />
                <TripContainer trips = {trips} completelyRemove={completelyRemove} />
            </div>
        </div>
    )
}

export default TripPage;