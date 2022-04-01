import React, {useState, useEffect} from "react";
import TripCard from './TripCard';

function MyTrips() {

    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(setTrips);
      }, []);

      const cards = trips.map((trip) =>(
        <TripCard 
            key= {trip.id} 
            trip = {trip} 
        />
    ));

    return (
        <div className="box">
            <div className="text-center">
                {cards}
            </div>
        </div>
    )
}

export default MyTrips;

