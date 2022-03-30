import React from "react";

function TripCard({trip, removeTrip}) {

    const {id, user, location} = trip;

    function handleDeleteClick() {
        fetch(`http://localhost:8000/test/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
            removeTrip(trip);
          });
      }

    return (
        <div>
            <div className= "card-name">
                {user}
            </div>
            <div className="location">
                {location}  
            </div>
            <button onClick={handleDeleteClick} id="delete"> X </button>
        </div>
    )
}

export default TripCard;