import React from "react";

function TripCard({trip, removeTrip}) {

    const {id, name} = trip;

    function handleDeleteClick() {
        fetch(`http://localhost:9292/users/${id}`, {
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
                {name}
            </div>
            <div className="location">
                {}  
            </div>
            <button onClick={handleDeleteClick} id="delete"> X </button>
        </div>
    )
}

export default TripCard;