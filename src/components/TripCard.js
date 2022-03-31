import React from "react";

function TripCard({trip, removeTrip}) {

    const {id, users, name} = trip;

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
                {users}
            </div>
            <div className="location">
                {name}  
            </div>
            <button onClick={handleDeleteClick} id="delete"> X </button>
        </div>
    )
}

export default TripCard;